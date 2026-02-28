export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-noir" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(201,168,76,0.08)_0%,_transparent_60%)]" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0v100M0 50h100' stroke='%23C9A84C' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          {/* Small overline */}
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-8">
            Noisy-le-Grand &mdash; Depuis 2015
          </p>

          {/* Main headline */}
          <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-8xl font-normal text-cream leading-[0.95] mb-8">
            Achat &amp; Vente
            <br />
            <span className="italic text-gold">d&apos;Or</span>
          </h1>

          {/* Gold divider */}
          <div className="gold-rule mx-auto mb-8" />

          {/* Subtitle */}
          <p className="font-[var(--font-display)] text-lg sm:text-xl text-cream/50 italic max-w-lg mx-auto mb-4">
            Bijoux sur mesure &middot; Expertise &middot; Paiement immédiat
          </p>

          <p className="text-cream/30 text-sm max-w-md mx-auto mb-12">
            Estimation gratuite, meilleurs prix garantis.
            <br />
            Chaque pièce mérite une attention d&apos;exception.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#calculator"
              className="inline-block text-[13px] tracking-[0.15em] uppercase px-10 py-4 bg-gold text-noir font-medium hover:bg-gold-light transition-colors"
            >
              Estimer Mon Or
            </a>
            <a
              href="tel:+33663239491"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase text-cream/50 hover:text-gold transition-colors"
            >
              <span className="w-10 h-px bg-cream/20" />
              Appeler
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  );
}
