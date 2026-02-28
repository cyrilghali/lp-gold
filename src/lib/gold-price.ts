const FALLBACK_PRICE_PER_GRAM_24K = 73.5;
const TROY_OUNCE_IN_GRAMS = 31.1035;
const FEE_RATE = 0; // pas de frais

export interface GoldPrice {
  pricePerGram24K: number;
  updatedAt: string;
  isLive: boolean;
}

export async function fetchGoldPrice(): Promise<GoldPrice> {
  const apiKey = process.env.GOLD_API_KEY;

  if (!apiKey) {
    return {
      pricePerGram24K: Math.round(FALLBACK_PRICE_PER_GRAM_24K * (1 + FEE_RATE) * 100) / 100,
      updatedAt: new Date().toISOString(),
      isLive: false,
    };
  }

  try {
    const res = await fetch("https://www.goldapi.io/api/XAU/EUR", {
      headers: { "x-access-token": apiKey },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Gold API returned ${res.status}`);
    }

    const data = await res.json();
    const pricePerOunce: number = data.price;
    const pricePerGram = pricePerOunce / TROY_OUNCE_IN_GRAMS;
    const priceWithFees = pricePerGram * (1 + FEE_RATE);

    return {
      pricePerGram24K: Math.round(priceWithFees * 100) / 100,
      updatedAt: new Date().toISOString(),
      isLive: true,
    };
  } catch {
    return {
      pricePerGram24K: Math.round(FALLBACK_PRICE_PER_GRAM_24K * (1 + FEE_RATE) * 100) / 100,
      updatedAt: new Date().toISOString(),
      isLive: false,
    };
  }
}

/** Compute per-gram buy-back prices for each karat from the 24K base price */
export function computeKaratPrices(pricePerGram24K: number) {
  const karats = [
    { karat: "9K", purity: "375\u2030", factor: 0.375 },
    { karat: "14K", purity: "585\u2030", factor: 0.585 },
    { karat: "18K", purity: "750\u2030", factor: 0.75 },
    { karat: "22K", purity: "916\u2030", factor: 0.916 },
    { karat: "24K", purity: "999\u2030", factor: 0.999 },
  ];

  return karats.map((k) => ({
    ...k,
    pricePerGram: (pricePerGram24K * k.factor).toFixed(2),
  }));
}
