import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LP Gold — Achat & Vente d'Or | Bijoux sur Mesure",
    short_name: "LP Gold",
    description:
      "Expert en achat et vente d'or et création de bijoux sur mesure à Noisy-le-Grand.",
    start_url: "/",
    display: "standalone",
    background_color: "#0C0B09",
    theme_color: "#C9A84C",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
