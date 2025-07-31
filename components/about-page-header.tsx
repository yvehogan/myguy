"use client";
import Link from "next/link";
import Navbar from "./navbar";
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element";

export default function AboutPageHeader() {
  return (
    <div className="p-2 rounded-full">
      <section 
        className="pb-32 text-center rounded-[40px]"
        style={{
          background: "linear-gradient(to bottom right, #F2F4FF 60%, rgba(251, 91, 62, 0.2) 100%)"
        }}
      >
        <Navbar />
        <AnimatedContainer className="max-w-7xl mx-auto">
          <AnimatedHeading 
            level={1}
            className="text-[69px] font-medium text-secondary-900 leading-tight mb-4 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About{" "}
            <span 
              style={{ 
                background: "linear-gradient(90.05deg, #AD66E6 44.69%, #FB5B3E 74.87%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent"
              }}
            >
              myguy
            </span>
          </AnimatedHeading>
          <AnimatedText
            className="text-lg text-neutral-200 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            {">"} <span className="font-light text-lg text-[#7B20C8]">About</span>
          </AnimatedText>
        </AnimatedContainer>
      </section>
    </div>
  );
}
