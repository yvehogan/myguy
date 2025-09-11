import FooterSection from "@/components/footer-section"
import AboutPageHeader from "@/components/about-page-header"
import WhyMyGuySection from "@/components/why-my-guy-section"
import AboutUsSection from "@/components/about-us"
import AboutFounderSection from "@/components/about-founder-section"
import AboutTeamSection from "@/components/meet-the-team"

export default function AboutPage() {
  return (
    <main>
      <AboutPageHeader />
      <AboutUsSection />
      <WhyMyGuySection />
      <AboutFounderSection />
      <AboutTeamSection />
      <FooterSection />
    </main>
  )
}
