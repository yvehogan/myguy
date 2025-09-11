"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedElement,
  AnimatedContainer,
  AnimatedText,
  fadeInLeft,
} from "@/components/ui/animated-element";

export default function AboutUsSection() {
  const personas = [
    {
      image: "/images/about-img1.png",
      bgColor: "#DAACFF",
    },
    {
      image: "/images/about-img2.png",
      bgColor: "#A2F0D6",
    },
    {
      image: "/images/about-img3.png",
      bgColor: "#FFB199",
    },
  ];
  return (
    <section className="bg-white mb-28">
      <>
        <div className="w-full md:max-w-6xl mx-auto text-center pt-24 pb-10 md:pb-24">
          <AnimatedContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {personas.map((persona, index) => (
              <AnimatedElement
                key={index}
                className="bg-white rounded-3xl flex flex-col items-center text-center mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full max-w-[300px] md:max-w-full md:h-[340px] mx-auto">
                  <Image
                    src={persona.image || persona.bgColor}
                    alt="describing images"
                    height={400}
                    width={400}
                    objectFit="cover"
                    className="overflow-hidden rounded-2xl"
                  />
                </div>
              </AnimatedElement>
            ))}
          </AnimatedContainer>
        </div>
        <div className="w-full md:max-w-6xl mt-5 md:mt-24 md:mb-6 mx-auto flex justify-between flex-col lg:flex-row items-center gap-2 md:gap-5 p-5 lg:p-0 font-light">
          <AnimatedElement
            className="w-full text-left"
            variants={fadeInLeft}
            duration={0.8}
            delay={0.1}
          >
            <AnimatedElement delay={0.2} duration={0.5}>
              <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-1.5 rounded-full mb-4">
                ABOUT US
              </Badge>
            </AnimatedElement>

            <AnimatedText
              className="text-md text-secondary-900 mb-6 font-light text-lg md:text-base leading-relaxed"
              delay={0.3}
            >
              <span className="font-medium">MyGuy</span> is more than just an
              app — it&apos;s a movement born from a vision to redefine
              brotherhood, mentorship, and safe spaces for men.
            </AnimatedText>

            <AnimatedText
              className=" text-secondary-900 mb-6 font-light text-lg md:text-base leading-relaxed"
              delay={0.4}
            >
              Our journey began in 2018, when we launched Boys Quarters Africa
              (BQA), Africa&apos;s first boy-child transformation movement. With
              little more than passion, a 100k monthly job, and a strong “why,”
              we set out to challenge harmful stereotypes, address silence
              around men&apos;s struggles, and equip boys and young men with the
              tools to thrive. Over the years, BQA has grown into a continental
              force, engaging over 500,000 boys across 5 African countries
              through mentorship programs, leadership bootcamps, correctional
              home interventions, and advocacy campaigns.
            </AnimatedText>

            <AnimatedText
              className="text-md text-secondary-900 mb-6 font-light text-lg md:text-base leading-relaxed md:leading-6"
              delay={0.5}
            >
              Out of this journey came a simple realization: men need a platform
              where they can connect, find guidance, and belong. That&apos;s why
              we built MyGuy — a digital community that turns the values of BQA
              into a practical tool for everyday life.
            </AnimatedText>
             <AnimatedText
              className="text-md text-secondary-900 mb-6 font-light text-lg md:text-base leading-relaxed md:leading-6"
              delay={0.5}
            >
              Through MyGuy, we are
              creating a safe, supportive, and engaging space where men and boys
              can thrive.
            </AnimatedText>
          </AnimatedElement>
        </div>
        {/* My Partners section */}
        <div className="w-full max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ width: "max-content" }}>
              <Image
                src="/images/partner1.png"
                alt="Partner 1"
                width={300}
                height={100}
                className="object-contain"
              />
              <Image
                src="/images/partner2.png"
                alt="Partner 2"
                width={300}
                height={100}
                className="object-contain"
              />
              <Image
                src="/images/partner3.png"
                alt="Partner 3"
                width={300}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
