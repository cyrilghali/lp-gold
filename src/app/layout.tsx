import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LP Gold — Achat & Vente d'Or | Bijoux sur Mesure | Noisy-le-Grand",
  description:
    "LP Gold, votre expert en achat et vente d'or à Noisy-le-Grand (93). Estimation gratuite, paiement immédiat, meilleurs prix garantis. Création de bijoux sur mesure.",
  keywords: [
    "achat or",
    "vente or",
    "rachat or",
    "bijoux sur mesure",
    "or Noisy-le-Grand",
    "bijoutier 93",
    "cours de l'or",
    "estimation or gratuite",
    "LP Gold",
  ],
  authors: [{ name: "LP Gold" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "LP Gold — Achat & Vente d'Or | Bijoux sur Mesure",
    description:
      "Expert en achat/vente d'or et création de bijoux sur mesure à Noisy-le-Grand. Estimation gratuite, paiement immédiat.",
    url: "https://lpgold.fr",
    siteName: "LP Gold",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://lpgold.fr/images/og-image.jpg",
        width: 512,
        height: 512,
        alt: "LP Gold — Expert en achat et vente d'or",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "LP Gold — Achat & Vente d'Or | Bijoux sur Mesure",
    description:
      "Expert en achat/vente d'or et création de bijoux sur mesure à Noisy-le-Grand.",
    images: [
      {
        url: "https://lpgold.fr/images/og-image.jpg",
        alt: "LP Gold — Expert en achat et vente d'or",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LP Gold",
  description:
    "Expert en achat et vente d'or et création de bijoux sur mesure à Noisy-le-Grand.",
  url: "https://lpgold.fr",
  telephone: "+33663239491",
  email: "lpgold93160@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 Avenue Emile Cossonneau",
    addressLocality: "Noisy-le-Grand",
    postalCode: "93160",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8489,
    longitude: 2.5519,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
  areaServed: {
    "@type": "City",
    name: "Noisy-le-Grand",
  },
  sameAs: ["https://www.instagram.com/lp_gold_/"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment est calculé le prix de rachat de mon or ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix est basé sur le cours international de l'or au moment de la transaction. Nous pesons votre or avec une balance de précision certifiée, testons sa pureté, puis appliquons le cours du jour.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types d'or rachetez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous rachetons toutes les formes d'or : bijoux, pièces de monnaie, lingots, or dentaire, débris d'or et or cassé.",
      },
    },
    {
      "@type": "Question",
      name: "L'estimation est-elle vraiment gratuite et sans engagement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, l'estimation est 100% gratuite et sans aucune obligation. Si notre offre ne vous convient pas, vous repartez avec vos objets sans frais.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il prendre rendez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, vous pouvez venir directement en boutique pendant nos horaires d'ouverture (lundi au samedi, 10h-19h). Pour la création de bijoux sur mesure, nous recommandons de prendre rendez-vous.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-noir text-cream`}>
        {children}
      </body>
    </html>
  );
}
