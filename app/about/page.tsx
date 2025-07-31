import AboutSection from "@/components/about-section"
import PartnerSection from "@/components/partner-section"
import FooterSection from "@/components/footer-section"
import AboutPageHeader from "@/components/about-page-header"
import WhyMyGuySection from "@/components/why-my-guy-section"
import MissionVisionSection from "@/components/mission-vission-section"
import WhatWeDoSection from "@/components/what-we-do-section"

export default function AboutPage() {
  return (
    <main>
      <AboutPageHeader />
      <AboutSection />
      <WhyMyGuySection />
      <MissionVisionSection />
      <WhatWeDoSection />
      <PartnerSection />
      <FooterSection />
    </main>
  )
}
