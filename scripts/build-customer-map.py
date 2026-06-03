#!/usr/bin/env python3
"""
Build the customer map data file from the master customer CSV.

  Input  : ~/Downloads/Filter Tech Customer List - Master List.csv  (PII — DO NOT COMMIT)
  Lookup : ~/Downloads/uscities-latlng.csv                          (US cities lat/lng — public dataset)
  Output : lib/customer-locations.ts                                (aggregated, PII-free)

Customer PII (names, addresses, phones, emails) never leaves this script.
Only (city, state, count, SVG x/y) is written to the TS output.

How it works:
  1. Read the master CSV. Skip "Account Only" rows (vendors without service addresses).
  2. Aggregate by (city, state) — drop everything else.
  3. Look up each city's lat/lng from the US cities dataset.
  4. Project each lat/lng to SVG coordinates using an Albers USA projection
     calibrated to the Wikimedia "Blank US Map (states only)" SVG (959×593).
  5. Write a typed TS module with the aggregated, projected data.

To run:
    python3 scripts/build-customer-map.py

Adjust CUSTOMER_CSV and CITIES_CSV paths below if your files live elsewhere.
"""

import csv
import json
import math
import os
import sys
from collections import Counter

# --- paths --------------------------------------------------------------------

CUSTOMER_CSV = os.path.expanduser(
    "~/Downloads/Filter Tech Customer List - Master List.csv"
)
CITIES_CSV = os.path.expanduser("~/Downloads/uscities-latlng.csv")
# Fallback used during initial setup:
if not os.path.exists(CITIES_CSV):
    CITIES_CSV = "/tmp/uscities-latlng.csv"

OUTPUT_TS = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lib",
    "customer-locations.ts",
)

# --- Albers USA projection ---------------------------------------------------
# Calibrated to the Wikimedia "Blank US Map (states only)" SVG at 959×593.

PHI0 = math.radians(38)
LAMBDA0 = math.radians(-96)
PHI1 = math.radians(29.5)
PHI2 = math.radians(45.5)
N = 0.5 * (math.sin(PHI1) + math.sin(PHI2))
C = math.cos(PHI1) ** 2 + 2 * N * math.sin(PHI1)
RHO0 = math.sqrt(C - 2 * N * math.sin(PHI0)) / N

SCALE = 1100
CX = 515
CY = 314


def project(lat: float, lng: float) -> tuple[float, float]:
    phi = math.radians(lat)
    lam = math.radians(lng)
    rho = math.sqrt(C - 2 * N * math.sin(phi)) / N
    theta = N * (lam - LAMBDA0)
    x = CX + rho * math.sin(theta) * SCALE
    y = CY - (RHO0 - rho * math.cos(theta)) * SCALE  # negated: north = up
    return (round(x, 1), round(y, 1))


# --- city lat/lng lookup ------------------------------------------------------

MANUAL_COORDS = {
    # Cities missing from the public dataset — typically "St." vs "Saint" forms.
    ("port st. joe", "FL"): (29.812, -85.302),
    ("st. simons island", "GA"): (31.150, -81.378),
    ("sugar hill", "GA"): (34.106, -84.034),
    ("hoover", "AL"): (33.405, -86.811),
    ("chattahoochee hills", "GA"): (33.575, -84.760),
    ("vestavia hills", "AL"): (33.443, -86.788),
    ("brookhaven", "GA"): (33.866, -84.336),
    ("ward hill", "MA"): (42.752, -71.116),
}


def load_city_lookup(path: str) -> dict[tuple[str, str], tuple[float, float]]:
    lookup: dict[tuple[str, str], tuple[float, float]] = {}
    with open(path, newline="") as f:
        for row in csv.DictReader(f):
            key = (
                row["CITY"].strip().lower(),
                row["STATE_CODE"].strip().upper(),
            )
            if key not in lookup:
                lookup[key] = (float(row["LATITUDE"]), float(row["LONGITUDE"]))
    for k, v in MANUAL_COORDS.items():
        lookup.setdefault(k, v)
    return lookup


# --- customer aggregation -----------------------------------------------------


def aggregate_customers(path: str) -> Counter:
    """Return Counter of (city, state) -> count. No PII retained."""
    with open(path, newline="", encoding="utf-8") as f:
        rows = list(csv.reader(f))
    header = rows[3]
    ci, si, ti = (
        header.index("City"),
        header.index("State"),
        header.index("Type"),
    )
    counter: Counter = Counter()
    for r in rows[4:]:
        if len(r) <= max(ci, si, ti):
            continue
        if "Account Only" in r[ti]:
            continue
        city = r[ci].strip()
        state = r[si].strip().upper()
        if not city or not state:
            continue
        counter[(city, state)] += 1
    return counter


# --- output -------------------------------------------------------------------


def write_ts(resolved: list[dict], out_path: str) -> None:
    lines = [
        "// AUTO-GENERATED from the master customer CSV. Customer PII is NOT included —",
        "// only (city, state, count, SVG coords) survive the pipeline.",
        "// Regenerate with scripts/build-customer-map.py.",
        "",
        "export interface CustomerLocation {",
        "  city: string;",
        "  state: string;",
        "  x: number;",
        "  y: number;",
        "  count: number;",
        "}",
        "",
        "export const customerLocations: CustomerLocation[] = [",
    ]
    for r in resolved:
        lines.append(
            f"  {{ city: {json.dumps(r['city'])}, state: '{r['state']}', "
            f"x: {r['x']}, y: {r['y']}, count: {r['count']} }},"
        )
    lines.append("];")
    lines.append("")
    lines.append(f"export const TOTAL_INSTALLS = {sum(r['count'] for r in resolved)};")
    lines.append(f"export const TOTAL_CITIES = {len(resolved)};")
    lines.append(
        f"export const STATES_WITH_INSTALLS = "
        f"{sorted(set(r['state'] for r in resolved))};"
    )

    with open(out_path, "w") as f:
        f.write("\n".join(lines))


def main() -> int:
    if not os.path.exists(CUSTOMER_CSV):
        print(f"Customer CSV not found: {CUSTOMER_CSV}", file=sys.stderr)
        return 1
    if not os.path.exists(CITIES_CSV):
        print(f"Cities lookup CSV not found: {CITIES_CSV}", file=sys.stderr)
        return 1

    city_lookup = load_city_lookup(CITIES_CSV)
    counter = aggregate_customers(CUSTOMER_CSV)

    resolved: list[dict] = []
    unresolved: list[tuple] = []
    for (city, state), count in counter.items():
        key = (city.lower(), state)
        if key in city_lookup:
            lat, lng = city_lookup[key]
            x, y = project(lat, lng)
            resolved.append(
                {"city": city, "state": state, "x": x, "y": y, "count": count}
            )
        else:
            unresolved.append((city, state, count))

    resolved.sort(key=lambda r: -r["count"])
    write_ts(resolved, OUTPUT_TS)

    print(
        f"Wrote {OUTPUT_TS}: "
        f"{len(resolved)} cities, {sum(r['count'] for r in resolved)} customers"
    )
    if unresolved:
        print(f"Unresolved cities ({len(unresolved)}):")
        for u in unresolved:
            print(f"  {u}")
        print("Add coords for these to MANUAL_COORDS and re-run.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
