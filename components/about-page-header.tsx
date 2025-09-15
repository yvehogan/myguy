"use client";
import Link from "next/link";
import Navbar from "./navbar";
import { 
  AnimatedContainer, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element";

export default function AboutPageHeader() {
  return (
    <div className="rounded-full">
      <section 
        className="pb-32 text-center md:rounded-[40px] bg-[url('/images/about-hero.png')] bg-cover bg-center bg-no-repeat"
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
            <div className='mt-16 flex relative flex-col gap-4  justify-center items-center'>
          <h1 className='text-[40px] md:text-[48px] z-10 text-secondary-900 text-3xl font-medium md:leading-[61px] tracking-[-1%]'>
            About Us
          </h1>
          <div className='h-[18px] w-[190px] md:w-[220px] bg-[#FFB19980] absolute top-[1.7rem] md:top-[2.2rem]' />
        </div>
          </AnimatedHeading>
        </AnimatedContainer>
      </section>
    </div>
  );
}
