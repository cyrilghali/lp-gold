const steps = [
  {
    title: "Contact",
    description: "Appelez, envoyez un WhatsApp ou venez directement en boutique.",
  },
  {
    title: "Expertise",
    description: "Test de pureté et pesée de précision, réalisés devant vous.",
  },
  {
    title: "Offre",
    description: "Prix basé sur le cours international du jour. Sans obligation.",
  },
  {
    title: "Paiement",
    description: "Règlement immédiat par virement bancaire.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-noir-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Simple &amp; Rapide
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Comment <span className="italic text-gold">ça marche</span>
          </h2>
        </div>

        <div className="scroll-animate relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gold/10 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-16 sm:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative sm:grid sm:grid-cols-2 sm:gap-16 ${i > 0 ? "sm:mt-16" : ""}`}
              >
                {/* Number marker */}
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 items-center justify-center">
                  <span className="font-[var(--font-display)] text-xs text-gold/50 italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "sm:text-right sm:pr-16"
                      : "sm:col-start-2 sm:pl-16"
                  }`}
                >
                  <h3 className="font-[var(--font-display)] text-xl text-cream mb-2">
                    <span className="sm:hidden font-[var(--font-display)] text-sm text-gold/40 italic mr-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-cream/40 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
