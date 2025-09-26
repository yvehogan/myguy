"use client";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import {
  AnimatedContainer,
  AnimatedElement,
  AnimatedHeading,
  AnimatedText,
} from "@/components/ui/animated-element";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="">
      <div
        className="min-h-screen bg-[#F2F4FF] bg-[url('/images/hero-mobile.png')] md:bg-[url('/images/hero.png')] md:p-2 md:px-8 bg-cover bg-center bg-no-repeat relative overflow-x-hidden rounded-xl md:rounded-[40px] flex flex-col"
        style={{ backgroundPosition: "center top" }}
      >
        {/* Fixed navbar section */}
        <div className="flex-shrink-0">
          <Navbar />
        </div>

        {/* Main content section with proper centering */}
        <div className="flex items-center justify-center px-2 md:px-8 py-12 md:py-16 lg:py-20">
          <AnimatedContainer className="text-center w-full max-w-6xl mx-auto">
            <AnimatedHeading
              level={1}
              className="text-3xl md:text-[40px] lg:text-[65px] font-medium text-secondary-900 leading-tight mb-8"
              delay={0.2}
            >
              A Safe Space where struggling quietly is no longer the only
              option.
            </AnimatedHeading>

            <AnimatedText
              className="text-lg text-neutral-200 font-light mb-16 max-w-2xl mx-auto leading-relaxed"
              delay={0.4}
            >
              MyGuy is Africa&apos;s first digital community that connects boys
              to mentors, men to community, and everyone to healing.
            </AnimatedText>

            <AnimatedElement
              delay={0.6}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="text-white rounded-full px-8 py-4 text-lg font-medium"
                asChild
              >
                <Link href="/waitlist">Join the waitlist</Link>
              </Button>
            </AnimatedElement>
          </AnimatedContainer>
        </div>

        {/* Bottom spacer to account for background image */}
        <div className="flex-shrink-0 h-32 md:h-40 lg:h-48"></div>
      </div>
    </div>
  );
}
