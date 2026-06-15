import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Accordion, type AccordionItem } from '@/components/ui/Accordion';

const faqs: AccordionItem[] = [
  {
    question: 'What’s the difference between whole-house and drinking water systems?',
    answer: (
      <p>
        A whole-house system filters every faucet, shower, and appliance, it
        protects your pipes, your skin, and your machines. A drinking water
        system polishes one tap, usually the kitchen sink, for what you
        actually drink and cook with. Most homes do best with both. We’ll tell
        you what yours needs.
      </p>
    ),
  },
  {
    question: 'Why do I need a water test if my water looks fine?',
    answer: (
      <p>
        Most water problems are invisible. Chlorine, dissolved iron, hardness,
        and bacterial byproducts don’t change how water looks. The only way to
        know what’s in your water is to measure it. We do it for free, we
        come to your home, collect samples, and send them to the lab.
      </p>
    ),
  },
  {
    question: 'Why does my system need annual maintenance?',
    answer: (
      <p>
        Filters trap things. Eventually they fill up. Without service, a loaded
        filter can start letting contaminants pass through or even feed them
        back into your water. Annual service keeps the system working the way
        it did the day it was installed, and we catch small problems before
        they become big ones.
      </p>
    ),
  },
  {
    question: 'Why might I need more than one system?',
    answer: (
      <p>
        Different problems need different solutions. A whole-house filter
        handles chlorine and sediment across the house, but it can’t strip the
        dissolved solids that affect taste, that’s a reverse-osmosis job.
        Stacking systems lets each one do what it’s best at, and it’s usually
        more cost-effective than asking one unit to do everything.
      </p>
    ),
  },
  {
    question: 'My water is treated by the city. Why filter it again?',
    answer: (
      <p>
        Cities treat water to make it safe, they use chlorine and other
        disinfectants to do that. Those chemicals do their job, but they don’t
        belong in your glass. City treatment also can’t do anything about what
        happens to the water between the plant and your house: old pipes,
        sediment, and pressure changes all leave marks.
      </p>
    ),
  },
  {
    question: 'How long does the home visit take?',
    answer: (
      <p>
        Usually 20 to 30 minutes. We listen to your concerns, collect water
        samples, and walk through where a system would sit if you need one.
        The precise lab readings come back afterward, and we follow up with
        the results and our recommendation.
      </p>
    ),
  },
];

export function FAQ() {
  return (
    <section className="border-t border-stone-300 bg-stone-100 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Common Questions"
              title="Here’s what people ask us most."
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </Container>
    </section>
  );
}
