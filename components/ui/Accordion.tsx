'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/cn';

export interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
}

export function Accordion({ items, className, defaultOpen }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpen ?? null,
  );

  return (
    <div className={cn('divide-y divide-stone-300 border-y border-stone-300', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={id}
                className="group flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-lg text-charcoal transition-colors hover:text-red sm:py-6 sm:text-xl"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-stone-300 text-charcoal transition-colors group-hover:border-red group-hover:text-red"
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
            </h3>
            <div
              id={id}
              hidden={!isOpen}
              className="pb-6 text-base leading-relaxed text-charcoal/80 sm:pb-8 sm:text-lg"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
