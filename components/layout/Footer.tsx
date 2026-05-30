import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { site, services } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-wide grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/80">
            Family-owned water filtration specialists serving Georgia, the Carolinas,
            Alabama, and North Florida. Filter Tech Inc. since 2010 — Jay’s
            been doing this work for 30+ years.
          </p>
          <div className="mt-6 space-y-2 text-sm text-cream/80">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 hover:text-cream"
            >
              <Phone size={14} />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 hover:text-cream"
            >
              <Mail size={14} />
              {site.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 flex-none" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </span>
            </div>
          </div>

          {/* Social */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Filter Tech on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-colors hover:border-cream hover:text-cream"
            >
              <Facebook size={16} />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream/70 hover:text-cream"
            >
              /filtertechinc
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
          <div>
            <h4 className="font-serif text-base text-cream">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-cream"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-base text-cream">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>
                <Link href="/about" className="hover:text-cream">
                  About Jay
                </Link>
              </li>
              <li>
                <Link href="/water-101" className="hover:text-cream">
                  Water 101
                </Link>
              </li>
              <li>
                <Link href="/service-area" className="hover:text-cream">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-cream">
                  Free Water Test
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-serif text-base text-cream">Certifications</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>Certified Installer</li>
              <li>RO / Ultra-filtration Certified</li>
              <li className="pt-2 text-cream/60">{site.hours}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-wide flex flex-col items-start justify-between gap-2 py-6 text-xs text-cream/60 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Know what you&rsquo;re drinking before you drink it.</p>
        </div>
      </div>
    </footer>
  );
}
