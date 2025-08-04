"use client";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element";

export default function HeroSection() {
  return (
    <div className="p-2 rounded-full">
      <div
        className="min-h-screen bg-[#F2F4FF] bg-[url('/svgs/hero.svg')] p-2 md:px-8 bg-cover bg-center bg-no-repeat relative overflow-hidden flex flex-col pb-[400px] rounded-[40px]"
        style={{ backgroundPosition: "center top" }}
      >
        <Navbar />
        <div className="flex-grow flex items-center justify-center md:px-8 pt-10 md:pt-24 pb-40">
          <AnimatedContainer className="text-center">
            <AnimatedHeading 
              level={1}
              className="text-3xl md:text-[65px] font-medium text-secondary-900 leading-tight mb-8 w-full md:max-w-6xl mx-auto"
              delay={0.2}
            >
              A Safe Space where struggling quietly is no longer the only option.
            </AnimatedHeading>
            
            <AnimatedText 
              className="text-lg text-neutral-200 font-light mb-16 max-w-2xl mx-auto leading-relaxed"
              delay={0.4}
            >
              MyGuy is Africa&apos;s first digital community that connects boys to
              mentors, men to community, and everyone to healing.
            </AnimatedText>
            
            <AnimatedElement
              delay={0.6}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="text-white rounded-full px-8 py-4 text-lg font-medium">
                Join the Waitlist
              </Button>
            </AnimatedElement>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
}
