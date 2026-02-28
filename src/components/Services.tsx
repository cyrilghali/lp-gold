import Image from "next/image";

const services = [
  {
    title: "Achat & Vente d'Or",
    description:
      "Bijoux, pièces, lingots, or dentaire. Nous achetons et vendons toutes les formes d'or au cours international du jour. Estimation transparente, paiement immédiat.",
    detail: "Toutes formes d'or acceptées",
    image: "/images/services/achat-vente-or.jpg",
    imageAlt: "Lingots et pièces d'or",
  },
  {
    title: "Bijoux sur Mesure",
    description:
      "Donnez vie à vos envies. Bagues, colliers, bracelets — chaque création est unique, réalisée avec un savoir-faire artisanal d'exception et des matériaux de première qualité.",
    detail: "Créations artisanales uniques",
    image: "/images/services/bijoux-sur-mesure.jpg",
    imageAlt: "Création de bijoux sur mesure",
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
                <div className="relative w-full aspect-[4/3] overflow-hidden border border-cream/5 group-hover:border-gold/15 transition-colors">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
