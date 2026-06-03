import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PageHero } from '@/components/sections/PageHero';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { ContactForm } from '@/components/forms/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Call, email, or send a message. Filter Tech serves GA, NC, SC, AL, and North Florida.',
};

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s talk water."
        description="The fastest way to get ahold of us here at Filter Tech is by phone. If you’d rather write us, the form below comes straight to our inbox where we can answer your questions there."
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-5">
            <div className="relative mb-10 aspect-square overflow-hidden rounded-sm border border-stone-300 bg-stone-100">
              <Image
                src="/images/jay-with-sign.jpg"
                alt="Jay Hanlon holding a Filter Tech sign with the company phone number"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <EyebrowLabel>Get In Touch</EyebrowLabel>
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              We answer every message.
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-charcoal/85 sm:text-lg">
              If Jay reads them, so do we. Within 48 hours, someone from our
              team will be in contact with you to ensure you have as much
              information about your water as possible.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-stone-300 text-charcoal">
                    <Icon size={16} />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-stone-600">
                      {label}
                    </dt>
                    {href ? (
                      <dd className="mt-1">
                        <a
                          href={href}
                          className="text-base font-medium text-charcoal underline decoration-red decoration-2 underline-offset-4 hover:text-red"
                        >
                          {value}
                        </a>
                      </dd>
                    ) : (
                      <dd className="mt-1 text-base font-medium text-charcoal">
                        {value}
                      </dd>
                    )}
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-stone-300 pt-6">
              <EyebrowLabel>Service Area</EyebrowLabel>
              <p className="mt-3 text-sm text-charcoal/85">
                {site.serviceArea.join(' · ')}
              </p>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="rounded-sm border border-stone-300 bg-stone-100 p-7 sm:p-10">
              <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-charcoal/75">
                We respond within 1–2 business days.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
