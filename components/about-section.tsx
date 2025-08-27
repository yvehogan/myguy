"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedElement,
  AnimatedHeading,
  AnimatedText,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/animated-element";

export default function AboutSection() {
  return (
    <section className="bg-white">
      <>
      <div className="w-full md:max-w-6xl mt-5 md:mt-24 md:mb-24 mx-auto flex justify-between flex-col lg:flex-row items-center gap-2 md:gap-5 p-4 lg:p-0 font-light">
        <AnimatedElement
          className="w-full lg:w-[50%] text-left"
          variants={fadeInLeft}
          duration={0.8}
          delay={0.1}
        >
          <AnimatedElement delay={0.2} duration={0.5}>
            <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-1.5 rounded-full mb-4">
              ABOUT
            </Badge>
          </AnimatedElement>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.3}
          >
            MYGUY is that one place you can just breathe. It is for boys and men
            who are tired of holding everything in. For the ones who need a
            guide, a soft landing, or someone who simply says, “You&apos;re not
            crazy, I&apos;ve been there too.”
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.4}
          >
            It is not therapy-speak. Not tough-love lectures either. It is
            presence. It is wisdom. It is growth. It is sharing with someone who
            gets it.
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.5}
          >
            This platform is a community, a brotherhood built for every boy,
            guy, man, uncle, father, grandfather, who wants to do better, feel
            better, and become better, without losing himself in the process.
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.5}
          >
            Whether you&apos;re here to talk, to listen, or just to know you&apos;re not alone, welcome home.
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900leading-6"
            delay={0.6}
          >
            This is <span className="font-medium">MyGuy</span>. The name says it all.
          </AnimatedText>
        </AnimatedElement>

        <AnimatedElement
          className="w-full lg:w-[50%] flex justify-start lg:justify-end"
          variants={fadeInRight}
          duration={0.8}
          delay={0.3}
        >
          <div className="relative w-full max-w-xl h-[400px] md:h-[450px] overflow-hidden p-8 bg-white">
            <Image
              src="/images/about1.png"
              alt="Man speaking to a group of boys at an event"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </AnimatedElement>
      </div>
      <div className="w-full md:max-w-6xl mt-5 md:mt-32 mb-10 md:mb-24 mx-auto flex justify-between flex-col-reverse lg:flex-row items-center gap-2 md:gap-5 p-4 lg:p-0 font-light">
        <AnimatedElement
          className="w-full lg:w-[50%] flex justify-start lg:justify-end"
          variants={fadeInRight}
          duration={0.8}
          delay={0.2}
        >
          <div className="relative w-full max-w-xl h-[400px] md:h-[450px] overflow-hidden p-8 bg-white">
            <Image
              src="/images/about2.png"
              alt="Man speaking to a group of boys at an event"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </AnimatedElement>

        <AnimatedElement
          className="w-full lg:w-[50%] text-left"
          variants={fadeInRight}
          duration={0.8}
          delay={0.5}
        >
          <AnimatedElement delay={0.7} duration={0.5}>
            <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-1.5 rounded-full mb-4">
              ABOUT
            </Badge>
          </AnimatedElement>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6 font-medium"
            delay={0.8}
          >
            It started with a question: “Who&apos;s checking in on the boys who are always told to man up?”
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={0.9}
          >
            That question turned into long late-night voice notes. Then into group chats. Then into real-life conversations that hit deep. Eventually, those moments became a movement.
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={1.0}
          >
            We built MYGUY because we got tired of pretending. Tired of masking pain with ego. Tired of silence being mistaken for strength. So we created the very thing we wish we had growing up: a space where a guy could show up exactly as he is and still be seen.
          </AnimatedText>

          <AnimatedText
            className="text-md text-secondary-900 mb-6 leading-6"
            delay={1.1}
          >
            This platform is for the ones trying to be better men in a world that never taught them how. And if even one guy finds his way back to himself through it, then it’s already working.
          </AnimatedText>
        </AnimatedElement>

       
      </div>
      </>

    </section>
  );
}
