"use client";

import { useState } from "react";

const karatOptions = [
  { label: "9K (375\u2030)", karat: "9K", factor: 0.375 },
  { label: "14K (585\u2030)", karat: "14K", factor: 0.585 },
  { label: "18K (750\u2030)", karat: "18K", factor: 0.75 },
  { label: "22K (916\u2030)", karat: "22K", factor: 0.916 },
  { label: "24K (999\u2030)", karat: "24K", factor: 0.999 },
];

interface Props {
  pricePerGram24K: number;
  isLive: boolean;
  updatedAt: string;
}

export default function GoldCalculator({ pricePerGram24K, isLive, updatedAt }: Props) {
  const [weight, setWeight] = useState("");
  const [selectedKarat, setSelectedKarat] = useState(karatOptions[2]);

  const weightNum = parseFloat(weight) || 0;
  const estimatedPrice = weightNum * pricePerGram24K * selectedKarat.factor;

  const formattedTime = new Date(updatedAt).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section id="calculator" className="py-32 bg-noir relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,168,76,0.05)_0%,_transparent_60%)]" />

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-5">
            Estimation Gratuite
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl font-normal text-cream">
            Calculez la <span className="italic text-gold">valeur</span>
            <br />
            de votre or
          </h2>
        </div>

        <div className="scroll-animate border border-cream/8 p-8 sm:p-10">
          {/* Live price indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-green-500" : "bg-cream/20"}`} />
            <span className="text-[11px] tracking-[0.15em] uppercase text-cream/30">
              {isLive
                ? `Cours en direct \u2014 ${formattedTime}`
                : "Prix indicatif"}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Weight */}
            <div>
              <label htmlFor="gold-weight" className="block text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                Poids (grammes)
              </label>
              <input
                id="gold-weight"
                type="number"
                min="0"
                step="0.1"
                placeholder="15.5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-transparent border-b border-cream/15 pb-3 text-cream text-lg placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Karat */}
            <div>
              <label htmlFor="gold-karat" className="block text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-3">
                Caratage
              </label>
              <select
                id="gold-karat"
                value={selectedKarat.karat}
                onChange={(e) => {
                  const found = karatOptions.find((k) => k.karat === e.target.value);
                  if (found) setSelectedKarat(found);
                }}
                className="w-full bg-transparent border-b border-cream/15 pb-3 text-cream text-lg focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
              >
                {karatOptions.map((k) => (
                  <option key={k.karat} value={k.karat} className="bg-noir text-cream">
                    {k.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className="text-center py-8 border-t border-cream/5">
            <p className="text-[11px] tracking-[0.25em] uppercase text-cream/30 mb-3">
              Estimation de rachat
            </p>
            <p className="font-[var(--font-display)] text-5xl sm:text-6xl text-gold font-normal">
              {estimatedPrice > 0
                ? `${estimatedPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0")}\u00A0\u20AC`
                : "\u2014"}
            </p>
            {weightNum > 0 && (
              <p className="text-cream/25 text-xs mt-3">
                {weightNum}g &times; {selectedKarat.label} &times; {pricePerGram24K}&nbsp;&euro;/g
              </p>
            )}
          </div>

          <p className="text-center text-cream/20 text-xs mt-4">
            Prix indicatif. Le prix final est déterminé après expertise en boutique.
          </p>

          <div className="text-center mt-8">
            <a
              href="https://wa.me/33663239491?text=Bonjour%2C%20je%20souhaite%20une%20estimation%20pour%20mon%20or."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.12em] uppercase text-gold hover:text-gold-light transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Demander une estimation précise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
