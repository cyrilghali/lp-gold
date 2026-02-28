const galleryItems = [
  {
    id: 1,
    alt: "Bague en or sur mesure",
    span: "col-span-2 row-span-2",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
        <circle cx="24" cy="26" r="14" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="24" cy="26" r="11" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 3" />
        <path d="M24 8L28 16H20L24 8Z" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    id: 2,
    alt: "Collier en or artisanal",
    span: "",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-gold">
        <path d="M6 12C6 12 12 20 18 20C24 20 30 12 30 12" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="18" cy="22" r="3" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    id: 3,
    alt: "Bracelet en or",
    span: "",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-gold">
        <ellipse cx="18" cy="18" rx="14" ry="8" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="18" cy="18" rx="11" ry="5" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    id: 4,
    alt: "Boucles d'oreilles en or",
    span: "",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-gold">
        <path d="M14 8V14C14 18 10 20 10 20" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="10" cy="22" r="2" stroke="currentColor" strokeWidth="0.5" />
        <path d="M22 8V14C22 18 26 20 26 20" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="26" cy="22" r="2" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    id: 5,
    alt: "Alliance sur mesure",
    span: "",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-gold">
        <ellipse cx="18" cy="18" rx="10" ry="12" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="18" cy="18" rx="7" ry="9" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    id: 6,
    alt: "Pendentif en or",
    span: "col-span-2",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-gold">
        <path d="M18 4V12" stroke="currentColor" strokeWidth="0.5" />
        <path d="M12 16L18 28L24 16H12Z" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-noir">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Galerie
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Nos <span className="italic text-gold">Créations</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`scroll-animate group relative aspect-square bg-noir-lighter overflow-hidden border border-cream/5 hover:border-gold/20 transition-all duration-500 ${item.span}`}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.07] via-transparent to-gold/[0.03]" />
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                {item.icon}
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-noir/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <p className="text-cream/80 text-sm font-[var(--font-display)] italic">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/20 text-xs mt-8">
          Photos de nos réalisations bientôt disponibles &mdash; suivez-nous sur{" "}
          <a
            href="https://www.instagram.com/lp_gold_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/40 hover:text-gold transition-colors"
          >
            Instagram
          </a>
        </p>
      </div>
    </section>
  );
}
