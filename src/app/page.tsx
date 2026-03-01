import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import GoldCalculator from "@/components/GoldCalculator";
import GoldPricing from "@/components/GoldPricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollAnimator from "@/components/ScrollAnimator";
import { fetchGoldPrice } from "@/lib/gold-price";

export const revalidate = 21600; // revalidate every 6 hours (~120 calls/month)

export default async function Home() {
  const goldPrice = await fetchGoldPrice();

  return (
    <>
      <ScrollAnimator />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-noir focus:text-sm focus:font-medium"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <GoldCalculator
          pricePerGram24K={goldPrice.pricePerGram24K}
          isLive={goldPrice.isLive}
          updatedAt={goldPrice.updatedAt}
        />
        <GoldPricing
          pricePerGram24K={goldPrice.pricePerGram24K}
          isLive={goldPrice.isLive}
          updatedAt={goldPrice.updatedAt}
        />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
