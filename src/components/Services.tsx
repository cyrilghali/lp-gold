const services = [
  {
    title: "Achat & Vente d'Or",
    description:
      "Bijoux, pièces, lingots, or dentaire. Nous achetons et vendons toutes les formes d'or au cours international du jour. Estimation transparente, paiement immédiat.",
    detail: "Toutes formes d'or acceptées",
    visual: (
      <div className="relative w-full aspect-[4/3] bg-noir-lighter border border-cream/5 overflow-hidden group-hover:border-gold/15 transition-colors">
        {/* Gold bar illustration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Stylized gold bar */}
            <svg width="160" height="120" viewBox="0 0 160 120" fill="none" className="opacity-40">
              <path d="M30 80L50 40H110L130 80H30Z" stroke="#C9A84C" strokeWidth="0.75" />
              <path d="M50 40L55 30H105L110 40H50Z" stroke="#C9A84C" strokeWidth="0.75" />
              <path d="M110 40L130 80L125 70L105 30L110 40Z" stroke="#C9A84C" strokeWidth="0.5" fill="#C9A84C" fillOpacity="0.05" />
              <text x="80" y="65" textAnchor="middle" fill="#C9A84C" fillOpacity="0.3" fontSize="10" fontFamily="serif" letterSpacing="2">999.9</text>
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Bijoux sur Mesure",
    description:
      "Donnez vie à vos envies. Bagues, colliers, bracelets — chaque création est unique, réalisée avec un savoir-faire artisanal d'exception et des matériaux de première qualité.",
    detail: "Créations artisanales uniques",
    visual: (
      <div className="relative w-full aspect-[4/3] bg-noir-lighter border border-cream/5 overflow-hidden group-hover:border-gold/15 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-tl from-gold/[0.06] to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Stylized ring with diamond */}
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className="opacity-40">
              <ellipse cx="70" cy="80" rx="40" ry="35" stroke="#C9A84C" strokeWidth="0.75" />
              <ellipse cx="70" cy="80" rx="35" ry="30" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 4" />
              {/* Diamond shape */}
              <path d="M70 30L82 48L70 65L58 48Z" stroke="#C9A84C" strokeWidth="0.75" />
              <path d="M58 48H82" stroke="#C9A84C" strokeWidth="0.5" />
              <path d="M70 30L64 48" stroke="#C9A84C" strokeWidth="0.3" />
              <path d="M70 30L76 48" stroke="#C9A84C" strokeWidth="0.3" />
              <path d="M64 48L70 65" stroke="#C9A84C" strokeWidth="0.3" />
              <path d="M76 48L70 65" stroke="#C9A84C" strokeWidth="0.3" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-noir-light">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Nos Services
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            L&apos;excellence au service
            <br />
            <span className="italic text-gold">de votre or</span>
          </h2>
        </div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`scroll-animate group grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 ${
                i < services.length - 1 ? "border-b border-cream/5" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-[11px] tracking-[0.3em] uppercase text-gold/50 mb-4">
                  {service.detail}
                </p>
                <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-normal text-cream mb-5">
                  {service.title}
                </h3>
                <p className="text-cream/45 leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                {service.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
