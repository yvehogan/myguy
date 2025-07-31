"use client";
import { Button } from "@/components/ui/button"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
} from "@/components/ui/animated-element"

export default function CtaSection() {
  return (
    <div className="p-4">
      <AnimatedContainer 
        className="bg-[#7B20C8] bg-[url('/svgs/waitlist.svg')] bg-cover bg-center py-24 px-8 md:px-16 lg:px-24 text-center rounded-3xl mx-auto max-w-6xl mb-24 p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AnimatedHeading 
          level={2}
          className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-8 max-w-3xl mx-auto"
          delay={0.2}
        >
          Ready to Grow and Improve? Get Started With a Mentor Today!
        </AnimatedHeading>
        <AnimatedElement
          delay={0.4}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-white text-[#7B20C8] hover:bg-gray-100 rounded-full px-8 py-8 text-base w-[210px]">
            Join the waitlist
          </Button>
        </AnimatedElement>
      </AnimatedContainer>
    </div>
  )
}
