import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-noir px-6">
      <div className="text-center max-w-md">
        <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-6">
          Erreur 404
        </p>
        <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl font-normal text-cream mb-4">
          Page <span className="italic text-gold">introuvable</span>
        </h1>
        <div className="w-12 h-px bg-gold/30 mx-auto mb-8" />
        <p className="text-cream/40 text-[15px] leading-relaxed mb-10">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block text-[13px] tracking-[0.15em] uppercase px-10 py-4 bg-gold text-noir font-medium hover:bg-gold-light transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
