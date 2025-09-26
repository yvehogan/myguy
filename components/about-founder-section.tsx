"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedElement,
  AnimatedText,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/animated-element";

export default function AboutFounderSection() {
  return (
    <section className="bg-white">
      <>
        <div className="w-full md:max-w-6xl mt-16 lg:mt-32 mb-24 mx-auto flex justify-between flex-col lg:flex-row gap-2 md:gap-10 p-4 lg:p-0 font-light">
          <AnimatedElement
            className="w-full lg:w-[35%]  justify-start"
            variants={fadeInRight}
            duration={0.8}
            delay={0.3}
          >
            <div className="relative w-full lg:max-w-xl h-[400px] md:h-[500px] overflow-hidden p-8 bg-white">
              <Image
                src="/images/solomon.png"
                alt="Man speaking to a group of boys at an event"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            <div className="mt-6 lg:mt-10 flex relative flex-col  justify-center items-center">
              <h1 className="md:text-[28px] z-10 text-secondary-900 text-3xl font-medium md:leading-[61px] tracking-[-1%] mb-2">
                Solomon O. Ayodele
              </h1>
              <div className="h-[15px] w-[180px] md:w-[280px] bg-primary-200 absolute top-[1.1rem] md:top-[2.0rem]" />
              <p>Founder, MyGuy</p>
            </div>
          </AnimatedElement>
          <AnimatedElement
            className="w-full lg:w-[65%] text-left mt-10 md:mt-0"
            variants={fadeInLeft}
            duration={0.8}
            delay={0.1}
          >
            <AnimatedElement delay={0.2} duration={0.5}>
              <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-1.5 rounded-full mb-4">
                ABOUT THE FOUNDER
              </Badge>
            </AnimatedElement>

            <AnimatedText
              className=" text-secondary-900 mb-6 font-light text-lg leading-relaxed"
              delay={0.3}
            >
              Solomon is a Global Boy Child Advocate, Development Enthusiast,
              Digital and Gender-Based Violence Expert. In 2018, He founded Boys
              Quarters Africa -- a Global Boy Child Advocacy movement with a
              thriving volunteer community of over 200 Individuals spread across
              11 Counties, and has impacted over 500,000 Boys and 20,000 Men
              through their impactful initiative.
            </AnimatedText>

            <AnimatedText
              className="text-md text-secondary-900 mb-6 font-light text-lg leading-relaxed"
              delay={0.4}
            >
              He has an excellent range of experiences across Development
              Studies, Sexual and Gender-Based Violence Management, Programs
              Management, Innovations Management, and Digital Transformation. He
              was nominated as one of the 10 Finalists for the Maiden Edition of
              the Nigerian Prize for Difference and Diversity, for his work
              around fostering gender equality via granular engagement of Men
              and Boys.
            </AnimatedText>

            <AnimatedText
              className=" text-secondary-900 mb-6 font-light text-lg leading-relaxed"
              delay={0.5}
            >
              He has a degree in Political Science from the Prestigious Adekunle
              Ajasin University and MBA, from Heriot-Watt University, United
              Kingdom (Edinburgh Business School). As the Executive Director of
              Boys&apos; Quarters Africa,, he leads a team of over 162
              volunteers across 23 cities in Africa, in driving the strategic
              pillars of the organization - leadership, empowerment, education
              and advocacy.
            </AnimatedText>

            <AnimatedText
              className=" text-secondary-900 mb-6 font-light text-lg leading-relaxed"
              delay={0.5}
            >
              Solomon is the convener of the Boys Too Project, a continent-wide
              campaign on the sexual abuse of the Boy Child. He is also the host
              of the yearly Exchange Project and Academy held at different
              Special Correctional Centre for Boys. He recently hosted
              Africa&apos;s first International Boy-Child Summit, with over
              2,000 viewership across the world and he is the curator of the
              men-themed conversation called -Guyversations.
            </AnimatedText>

            <AnimatedText
              className=" text-secondary-900 font-light text-lg leading-relaxed"
              delay={0.6}
            >
              He is the Author of Boyfession - a very short insightful and
              transformational e-book for Boys and those who love them. The book
              is a compendium of healthy confessions and is an answer to the
              varying questions across the sexual abuse of boys, how parents can
              see through, if their boys are being abused and how they can
              respond immediately.
            </AnimatedText>
          </AnimatedElement>
        </div>
      </>
    </section>
  );
}
