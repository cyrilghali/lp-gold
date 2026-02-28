const testimonials = [
  {
    name: "Marie L.",
    text: "Service impeccable. Le prix proposé était bien au-dessus de ce que d'autres boutiques m'avaient offert. Paiement immédiat et en toute confiance.",
  },
  {
    name: "Karim B.",
    text: "J'ai fait réaliser une bague de fiançailles sur mesure. Le résultat est magnifique. Un vrai travail d'artisan, je recommande à 100%.",
  },
  {
    name: "Sophie D.",
    text: "Très professionnel et transparent. Ils m'ont tout expliqué : le pesage, le test de pureté, le calcul du prix. Je reviendrai sans hésiter.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-noir-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Témoignages
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Ils nous font <span className="italic text-gold">confiance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream/5">
          {testimonials.map((t) => (
            <div key={t.name} className="scroll-animate bg-noir-light p-8 sm:p-10">
              {/* Gold quote mark */}
              <span className="font-[var(--font-display)] text-5xl text-gold/20 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-cream/50 leading-relaxed text-[15px] mb-8">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-px bg-gold/30" />
                <span className="text-[12px] tracking-[0.08em] text-cream/40">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
