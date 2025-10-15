import FooterSection from "@/components/footer-section"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#F2F4FF]">
      <Navbar />
      <div className="">
        <div className="max-w-4xl mx-auto px-6 pt-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to support you on your journey. Reach out to us via email and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid justify-center mb-16">
          <div className="text-center hover:shadow-lg transition-shadow max-w-2xl bg-white rounded-lg p-8 shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-6">Get help via email within 24 hours</p>
            <a href="mailto:hello@myguy.me" className="block">
              <Button className="w-full">
                hello@myguy.me
              </Button>
            </a>
          </div>
        </div>

      </div>

      <FooterSection />
    </main>
  )
}