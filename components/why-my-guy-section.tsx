"use client";
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText,
  fadeInLeft,
  fadeInRight
} from "@/components/ui/animated-element"

export default function WhyMyGuySection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto flex justify-between flex-col-reverse lg:flex-row items-center gap-16 p-4">
        <AnimatedElement 
          className="w-full lg:w-1/2 flex justify-start lg:justify-end"
          variants={fadeInLeft}
          duration={0.8}
          delay={0.3}
        >
            <Image
              src="/svgs/whymyguy.svg"
              alt="Man speaking to a group of boys at an event"
              height={600}
              width={600}
              objectFit="contain"
              className="rounded-[40px] bg-[#DAACFF]"
            />
        </AnimatedElement>
        
        <AnimatedElement 
          className="w-full lg:w-[43.5%] text-left"
          variants={fadeInRight}
          duration={0.8}
          delay={0.1}
        >
          <AnimatedElement delay={0.2} duration={0.5}>
            <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
              OUR WHY
            </Badge>
          </AnimatedElement>
          
          <AnimatedHeading 
            level={2}
            className="text-[40px] text-secondary-900 font-medium mb-6"
            delay={0.3}
          >
            Why myguy
          </AnimatedHeading>
          
          <AnimatedText 
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.4}
          >
            1 in 4 African men suffer from depression silently.
            Many never speak up. They&apos;re told that real men don&apos;t cry. That struggle should be endured, not shared
          </AnimatedText>
          
          <AnimatedText 
            className="text-md text-secondary-900mb-6 leading-6 mb-10"
            delay={0.5}
          >
            But we believe real strength starts with vulnerability.
            And every boy deserves someone to walk the journey with him.
          </AnimatedText>
        </AnimatedElement>
      </div>
    </section>
  )
}
