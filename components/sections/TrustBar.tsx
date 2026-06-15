import { Container } from '@/components/layout/Container';

const items = [
  'Water Specialists',
  '30+ Years in Water Filtration',
  '850+ Homes Served',
];

export function TrustBar() {
  return (
    <section className="bg-charcoal text-cream">
      <Container className="grid grid-cols-1 gap-x-8 gap-y-4 py-8 text-center sm:grid-cols-3 sm:py-10">
        {items.map((label) => (
          <p
            key={label}
            className="text-[11px] font-medium uppercase tracking-widest text-cream/90 sm:text-xs"
          >
            {label}
          </p>
        ))}
      </Container>
    </section>
  );
}
