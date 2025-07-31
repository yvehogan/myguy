"use client";
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText,
  fadeInLeft,
  fadeInRight
} from "@/components/ui/animated-element"
import dynamic from "next/dynamic"

const MotionBadge = dynamic(() => import("framer-motion").then(mod => {
  const MotionComponent = mod.motion(Badge);
  return MotionComponent;
}), { ssr: false });

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="w-full md:max-w-6xl mx-auto flex justify-between flex-col lg:flex-row items-center gap-16 p-4">
        <AnimatedElement 
          className="w-full lg:w-[43.5%] text-left"
          variants={fadeInLeft}
          duration={0.8}
          delay={0.1}
        >
          <AnimatedElement delay={0.2} duration={0.5}>
            <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
              ABOUT
            </Badge>
          </AnimatedElement>
          
          <AnimatedHeading 
            level={2}
            className="text-[40px] text-secondary-900 font-medium mb-6"
            delay={0.3}
          >
            It started with a burden...
          </AnimatedHeading>
          
          <AnimatedText 
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.4}
          >
            A burden for the quiet struggles of African boys and men. The stories no one hears. The pain that's masked
            with silence. The pressure to be strong, but never soft. To lead, but never break.
          </AnimatedText>
          
          <AnimatedText 
            className="text-md text-secondary-900mb-6 leading-6 mb-10"
            delay={0.5}
          >
            As mentors, friends, and brothers, we saw too many boys growing up with wounds they weren't allowed to
            name—let alone heal. And too many men carrying pain that that no one had space for.
          </AnimatedText>
          
          <AnimatedText 
            className="text-md text-secondary-900leading-6"
            delay={0.6}
          >
            That's why we built: MyGuy.
          </AnimatedText>
        </AnimatedElement>
        
        <AnimatedElement 
          className="w-full lg:w-1/2 flex justify-start lg:justify-end"
          variants={fadeInRight}
          duration={0.8}
          delay={0.3}
        >
          <div className="relative w-full max-w-xl h-[400px] md:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden p-8 bg-white">
            <Image
              src="/images/about.png"
              alt="Man speaking to a group of boys at an event"
              layout="fill"
              objectFit="contain"
              className="rounded-[40px]"
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}
