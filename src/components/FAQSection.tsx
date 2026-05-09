import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Perguntas Frequentes", items }: FAQSectionProps) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="mb-10 opacity-0 animate-fade-in-up animation-delay-700"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2
        id="faq-heading"
        className="text-xl md:text-2xl font-display font-bold text-center mb-6 text-gradient"
      >
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <article
              key={i}
              className="rounded-lg border border-primary/20 bg-primary/5 overflow-hidden transition-all"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-primary/10 transition-colors"
                aria-expanded={isOpen}
              >
                <span
                  className="font-medium text-foreground text-sm md:text-base"
                  itemProp="name"
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-primary shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="overflow-hidden">
                  <p
                    className="px-4 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed"
                    itemProp="text"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
