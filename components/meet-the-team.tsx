"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedContainer,
  AnimatedElement,
  AnimatedHeading,
  AnimatedText,
} from "@/components/ui/animated-element";

export default function AboutTeamSection() {
  const personas = [
    {
      name: "Solomon O. Ayodele",
      title: "Founder & CEO, MyGuy",
      image: "/images/solomon.png",
      bgColor: "#DAACFF",
    },
    {
      name: "Blessing Ojo",
      title: "Operations",
      image: "/images/blessing.png",
      bgColor: "#A2F0D6",
    },
    {
      name: "Moyinoluwa Akindele",
      title: "Product Manager",
      image: "/images/moyin.png",
      bgColor: "#FFB199",
    },
    {
      name: "Henry Ozomgbachi",
      title: "Engineering Lead",
      image: "/images/schools.png",
      bgColor: "#FF9BC9",
    },
    {
      name: "Victor Onwuelu",
      title: "Product Design",
      image: "/images/mentees.png",
      bgColor: "#DAACFF",
    },
    {
      name: "Esther Ebokpo",
      title: "Social Media",
      image: "/images/mentor.png",
      bgColor: "#A2F0D6",
    },
    {
      name: "Chuka Esonwune",
      title: "Community Enagement",
      image: "/images/chuka.png",
      bgColor: "#FFB199",
    },
  ];

  return (
    <section className="bg-white">
      <div className="w-full md:max-w-6xl mx-auto pb-24 p-4">
        <AnimatedElement delay={0.1} duration={0.5}>
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
            THE TEAM
          </Badge>
        </AnimatedElement>

        <AnimatedHeading
          level={2}
          className="text-[40px] font-medium text-secondary-900 leading-tight mb-12"
          delay={0.2}
        >
          Meet The Team
        </AnimatedHeading>

        <AnimatedContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
              <AnimatedElement
                delay={0.2 + index * 0.1}
                duration={0.6}
                className="relative w-full max-w-[300px] md:max-w-full md:h-[340px] mx-auto"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <Image
                  src={persona.image || persona.bgColor}
                  alt={persona.title}
                  height={400}
                  width={400}
                  objectFit="cover"
                  className="overflow-hidden rounded-2xl"
                />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[95%] bg-white rounded-2xl shadow-md px-4 py-1.5 flex flex-col items-center">
                  <span className="text-secondary-900 font-medium text-lg">
                    {persona.name}
                  </span>
                  <span className="text-neutral-200 text-sm">
                    {persona.title}
                  </span>
                </div>
              </AnimatedElement>
            </AnimatedElement>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
