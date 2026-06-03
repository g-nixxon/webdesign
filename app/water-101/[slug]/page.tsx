import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { EyebrowLabel } from '@/components/ui/EyebrowLabel';
import { Button } from '@/components/ui/Button';
import { articles } from '@/lib/articles-data';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: { '@type': 'Organization', name: site.name },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/water-101/${article.slug}`,
  };

  return (
    <>
      <Script
        id={`article-jsonld-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="bg-cream pb-20 pt-12 sm:pb-28 sm:pt-16">
        <Container size="prose">
          <Link
            href="/water-101"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal underline decoration-red decoration-2 underline-offset-4 hover:text-red"
          >
            <ArrowLeft size={14} />
            Back to Water 101
          </Link>
          <header className="mt-8 border-b border-stone-300 pb-10">
            <EyebrowLabel>{article.category}</EyebrowLabel>
            <h1 className="mt-4 font-serif text-3xl leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              {article.excerpt}
            </p>
          </header>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/85 sm:text-lg">
            {article.body.map((block, i) => {
              if (block.heading) {
                return (
                  <h2
                    key={i}
                    className="mt-12 font-serif text-2xl leading-tight text-charcoal sm:text-3xl"
                  >
                    {block.heading}
                  </h2>
                );
              }
              if (block.list) {
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-red"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i}>{block.paragraph}</p>;
            })}
          </div>

          {/* End-of-article CTA */}
          <aside className="mt-16 rounded-sm border border-stone-300 bg-stone-100 p-7 sm:p-10">
            <EyebrowLabel>Your Water, Specifically</EyebrowLabel>
            <h2 className="mt-4 font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
              Get a free in-home water test.
            </h2>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-charcoal/80">
              Articles can only do so much. The fastest way to know what’s in
              your water is to have a water specialist test it. No
              charge, no obligation.
            </p>
            <div className="mt-6">
              <Button href="/book" size="lg">
                Book Your Free Water Test
              </Button>
            </div>
          </aside>
        </Container>
      </article>
    </>
  );
}
