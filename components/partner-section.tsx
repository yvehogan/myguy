"use client";
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Image from "next/image"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element"

export default function PartnerSection() {
  return (
    <section className="bg-[#AD66E6] bg-[url('/svgs/partners.svg')] bg-cover bg-center text-center relative overflow-hidden my-20 py-16 p-4">
      <AnimatedContainer className="max-w-xl mx-auto relative z-10">
        <AnimatedElement
          initial={{ scale: 0, opacity: 0 }}
          animate="visible"
          variants={{
            visible: { scale: 1, opacity: 1 }
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/svgs/user.svg"
            alt="Partner Logos"
            width={80}
            height={80}
            className="mx-auto mb-4"
          />
        </AnimatedElement>
        
        <AnimatedHeading 
          level={2}
          className="text-[40px] font-medium text-white leading-tight mb-4"
          delay={0.2}
        >
          Partner with us
        </AnimatedHeading>
        
        <AnimatedText 
          className="text-base text-[#F4F4F4] mb-12 leading-relaxed"
          delay={0.3}
        >
          We're on a mission to redefine masculinity in Africa through healing, mentoring, and honest conversation. But
          we can't do it alone.
        </AnimatedText>
        
        <AnimatedElement
          delay={0.4}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-8 w-[300px] text-base">
            Partner with us <span className="ml-2">→</span>
          </Button>
        </AnimatedElement>
      </AnimatedContainer>
    </section>
  )
}
