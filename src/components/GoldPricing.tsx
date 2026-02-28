import { computeKaratPrices } from "@/lib/gold-price";

interface Props {
  pricePerGram24K: number;
  isLive: boolean;
  updatedAt: string;
}

export default function GoldPricing({ pricePerGram24K, isLive, updatedAt }: Props) {
  const prices = computeKaratPrices(pricePerGram24K);
  const pricePerKilo = Math.round(pricePerGram24K * 1000);

  const formattedTime = new Date(updatedAt).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section id="pricing" className="py-32 bg-noir-light">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Cours de l&apos;Or
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream mb-4">
            Prix de <span className="italic text-gold">rachat</span>
          </h2>
          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-green-500" : "bg-cream/20"}`} />
            <span className="text-[11px] tracking-[0.15em] uppercase text-cream/30">
              {isLive
                ? `Mis à jour à ${formattedTime}`
                : "Prix indicatif"}
            </span>
          </div>
        </div>

        {/* Kilo highlight */}
        <div className="scroll-animate text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-cream/30 mb-3">
            Or pur 24K &mdash; Prix au kilogramme
          </p>
          <p className="font-[var(--font-display)] text-5xl sm:text-6xl text-gold font-normal">
            {pricePerKilo.toLocaleString("fr-FR")}&nbsp;&euro;
          </p>
          <div className="gold-rule mx-auto mt-6" />
        </div>

        {/* Pricing table */}
        <div className="scroll-animate">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream/10">
                <th className="text-left py-4 text-[11px] tracking-[0.2em] uppercase text-cream/30 font-normal">
                  Caratage
                </th>
                <th className="text-left py-4 text-[11px] tracking-[0.2em] uppercase text-cream/30 font-normal">
                  Pureté
                </th>
                <th className="text-right py-4 text-[11px] tracking-[0.2em] uppercase text-cream/30 font-normal">
                  Prix / Gramme
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row) => (
                <tr
                  key={row.karat}
                  className="border-b border-cream/5 hover:bg-gold/[0.02] transition-colors"
                >
                  <td className="py-5 font-[var(--font-display)] text-lg text-cream">
                    {row.karat}
                  </td>
                  <td className="py-5 text-cream/40 text-sm">{row.purity}</td>
                  <td className="py-5 text-right font-[var(--font-display)] text-lg text-gold">
                    {row.pricePerGram}&nbsp;&euro;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-cream/20 text-xs mt-8">
          {isLive
            ? "Prix basés sur le cours international de l\u2019or + 10\u00A0% de frais \u2014 actualisés toutes les heures"
            : "Prix indicatifs (frais de 10\u00A0% inclus) \u2014 contactez-nous pour une estimation personnalisée"}
        </p>
      </div>
    </section>
  );
}
