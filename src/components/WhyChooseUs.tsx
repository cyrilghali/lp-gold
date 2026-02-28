const values = [
  {
    title: "Expertise",
    description: "Des années d'expérience dans l'évaluation de métaux précieux.",
  },
  {
    title: "Transparence",
    description: "Pesage et test de pureté réalisés devant vous. Aucun frais caché.",
  },
  {
    title: "Paiement Immédiat",
    description: "Virement bancaire le jour même de la transaction.",
  },
  {
    title: "Confidentialité",
    description: "Chaque transaction est traitée avec la plus grande discrétion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-noir relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent ml-[10%] hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="scroll-animate text-center mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Nos Engagements
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Pourquoi <span className="italic text-gold">LP Gold</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-14">
          {values.map((v) => (
            <div key={v.title} className="scroll-animate group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all duration-500" />
                <h3 className="text-[13px] tracking-[0.2em] uppercase text-gold font-medium">
                  {v.title}
                </h3>
              </div>
              <p className="text-cream/40 text-[15px] leading-relaxed pl-12">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
