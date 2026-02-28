const goldPrices = [
  { karat: "9K", purity: "375\u2030", pricePerGram: "27.50" },
  { karat: "14K", purity: "585\u2030", pricePerGram: "42.90" },
  { karat: "18K", purity: "750\u2030", pricePerGram: "55.00" },
  { karat: "22K", purity: "916\u2030", pricePerGram: "67.20" },
  { karat: "24K", purity: "999\u2030", pricePerGram: "73.50" },
];

export default function GoldPricing() {
  return (
    <section id="pricing" className="py-32 bg-noir-light">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Cours de l&apos;Or
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream mb-4">
            Prix de <span className="italic text-gold">Rachat</span>
          </h2>
        </div>

        {/* Kilo highlight */}
        <div className="scroll-animate text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-cream/30 mb-3">
            Or pur 24K &mdash; Prix au kilogramme
          </p>
          <p className="font-[var(--font-display)] text-5xl sm:text-6xl text-gold font-normal">
            73&nbsp;500&nbsp;&euro;
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
              {goldPrices.map((row) => (
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
          Prix indicatifs &mdash; contactez-nous pour une estimation personnalisée
        </p>
      </div>
    </section>
  );
}
