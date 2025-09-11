import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PersonaSection from "@/components/persona-section"
import FeaturesSection from "@/components/features-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PersonaSection />
      <FeaturesSection />
      {/* <PartnerSection /> */}
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  )
}
