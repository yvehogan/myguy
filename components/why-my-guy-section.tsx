"use client";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedElement,
  AnimatedHeading,
  AnimatedText,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/animated-element";

export default function WhyMyGuySection() {
  return (
    <section className="bg-[#FFF1ECB2]">
      <div className="max-w-6xl mx-auto flex justify-between flex-col lg:flex-row items-start gap-5 py-16 p-5">
        <AnimatedElement
          className="w-full lg:w-[20%] flex justify-start mt-3"
          variants={fadeInLeft}
          duration={0.8}
          delay={0.3}
        >
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full md:mb-6">
            OUR STORY
          </Badge>
        </AnimatedElement>

        <AnimatedElement
          className="w-full lg:w-[80%] text-left"
          variants={fadeInRight}
          duration={0.8}
          delay={0.1}
        >
          <AnimatedHeading
            level={2}
            className="text-[24px] text-secondary-900 font-medium mb-6 leading-relaxed"
            delay={0.3}
          >
            It started with a question: “Who&apos;s checking in on the boys who
            are always told to man up?”
          </AnimatedHeading>

          <AnimatedText
            className="text-lg font-light text-secondary-900 leading-relaxed mb-6"
            delay={0.4}
          >
            That question turned into long late-night voice notes. Then into
            group chats. Then into real-life conversations that hit deep.
            Eventually, those moments became a movement.
          </AnimatedText>

          <AnimatedText
            className="text-lg font-light text-secondary-900 leading-relaxed mb-6"
            delay={0.5}
          >
            We built MYGUY because we got tired of pretending. Tired of masking
            pain with ego. Tired of silence being mistaken for strength. So we
            created the very thing we wish we had growing up: a space where a
            guy could show up exactly as he is and still be seen.
          </AnimatedText>
          <AnimatedText
            className="text-lg font-light text-secondary-900 leading-relaxed mb-6"
            delay={0.6}
          >
            This platform is for the ones trying to be better men in a world
            that never taught them how. And if even one guy finds his way back
            to himself through it, then it&apos;s already working.
          </AnimatedText>
        </AnimatedElement>
      </div>
    </section>
  );
}
