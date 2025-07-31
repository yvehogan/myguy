"use client";
import { Badge } from "@/components/ui/badge"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element"

export default function WhatWeDoSection() {
  const offerings = [
    "One-on-one mentorship",
    "Mental health tools and mood check-ins",
    "Safe community discussions",
    "Journaling and self-reflection",
    "A growing library of personal growth resources",
  ]

  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-6xl mx-auto p-4">
        <AnimatedElement delay={0.1}>
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
            OUR PURPOSE
          </Badge>
        </AnimatedElement>
        
        <AnimatedHeading 
          level={2}
          className="text-[40px] text-secondary-900 font-medium mb-6"
          delay={0.2}
        >
          What we do
        </AnimatedHeading>
        
        <AnimatedText 
          className="text-md text-neutral-200 mb-6 leading-6 max-w-2xl mx-auto"
          delay={0.3}
        >
          myguy is a mobile mentorship platform designed for boys and men seeking growth, support, and guidance through:
        </AnimatedText>
        
        <AnimatedContainer 
          className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-10"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {offerings.map((offering, index) => (
            <AnimatedElement
              key={index}
              className="w-full md:w-[30%] text-secondary-900 py-10 rounded-2xl text-base bg-[#F3E9FD] border-l-4 border-[#7B20C8]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(123, 32, 200, 0.1)" }}
            >
              {offering}
            </AnimatedElement>
          ))}
        </AnimatedContainer>

        <AnimatedText 
          className="text-base text-neutral-200 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          We're building a space where men don't just survive—they grow, lead, and heal.
        </AnimatedText>
      </div>
    </section>
  )
}
