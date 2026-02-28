import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0B09",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-gold.com"),
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
  alternates: {
    canonical: "/",
  },
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
    url: "https://lp-gold.com",
    siteName: "LP Gold",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LP Gold — Expert en achat et vente d'or à Noisy-le-Grand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LP Gold — Achat & Vente d'Or | Bijoux sur Mesure",
    description:
      "Expert en achat/vente d'or et création de bijoux sur mesure à Noisy-le-Grand.",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "LP Gold — Expert en achat et vente d'or à Noisy-le-Grand",
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
  "@id": "https://lp-gold.com/#organization",
  name: "LP Gold",
  description:
    "Expert en achat et vente d'or et création de bijoux sur mesure à Noisy-le-Grand.",
  url: "https://lp-gold.com",
  telephone: "+33663239491",
  email: "contact@lp-gold.com",
  image: "https://lp-gold.com/images/og-image.jpg",
  logo: {
    "@type": "ImageObject",
    url: "https://lp-gold.com/icon.png",
    width: 192,
    height: 192,
  },
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
        text: "Nous rachetons toutes les formes d'or : bijoux, pièces de monnaie, lingots, or dentaire, débris d'or et or cassé. Peu importe l'état, nous pouvons l'évaluer.",
      },
    },
    {
      "@type": "Question",
      name: "L'estimation est-elle gratuite et sans engagement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, absolument. L'estimation est 100% gratuite et sans aucune obligation. Si notre offre ne vous convient pas, vous repartez avec vos objets sans frais.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne la création de bijoux sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tout commence par un rendez-vous pour discuter de votre projet. Nous réalisons des croquis et un devis détaillé. Après validation, votre bijou est créé artisanalement. Le délai varie selon la complexité, généralement entre 2 et 4 semaines.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont vos moyens de paiement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour le rachat d'or, nous payons en espèces (dans les limites légales) ou par virement bancaire instantané. Le paiement est effectué le jour même.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il prendre rendez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, vous pouvez venir directement en boutique du lundi au samedi, de 10h à 19h. Pour la création de bijoux sur mesure, nous recommandons de prendre rendez-vous.",
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
