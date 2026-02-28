"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Comment est calculé le prix de rachat de mon or ?",
    answer:
      "Le prix est basé sur le cours international de l'or au moment de la transaction. Nous pesons votre or avec une balance de précision certifiée, testons sa pureté, puis appliquons le cours du jour.",
  },
  {
    question: "Quels types d'or rachetez-vous ?",
    answer:
      "Nous rachetons toutes les formes d'or : bijoux, pièces de monnaie, lingots, or dentaire, débris d'or et or cassé. Peu importe l'état, nous pouvons l'évaluer.",
  },
  {
    question: "L'estimation est-elle gratuite et sans engagement ?",
    answer:
      "Oui, absolument. L'estimation est 100% gratuite et sans aucune obligation. Si notre offre ne vous convient pas, vous repartez avec vos objets sans frais.",
  },
  {
    question: "Comment fonctionne la création de bijoux sur mesure ?",
    answer:
      "Tout commence par un rendez-vous pour discuter de votre projet. Nous réalisons des croquis et un devis détaillé. Après validation, votre bijou est créé artisanalement. Le délai varie selon la complexité, généralement entre 2 et 4 semaines.",
  },
  {
    question: "Quels sont vos moyens de paiement ?",
    answer:
      "Pour le rachat d'or, nous payons en espèces (dans les limites légales) ou par virement bancaire instantané. Le paiement est effectué le jour même.",
  },
  {
    question: "Faut-il prendre rendez-vous ?",
    answer:
      "Non, vous pouvez venir directement en boutique du lundi au samedi, de 10h à 19h. Pour la création de bijoux sur mesure, nous recommandons de prendre rendez-vous.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-noir">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            FAQ
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Questions <span className="italic text-gold">Fréquentes</span>
          </h2>
        </div>

        <div className="scroll-animate divide-y divide-cream/8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-[var(--font-display)] text-cream/80 text-lg pr-8 group-hover:text-cream transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`text-gold/50 shrink-0 mt-1.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-cream/40 text-[15px] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
