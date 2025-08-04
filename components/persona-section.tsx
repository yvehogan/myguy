"use client";
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element"

export default function PersonaSection() {
  const personas = [
    {
      title: "Mentees",
      image: "/svgs/mentees.svg",
      bgColor: "#DAACFF"
    },
    {
      title: "Mentors",
      image: "/svgs/mentor.svg",
      bgColor: "#A2F0D6"
    },
    {
      title: "Parents & Guardians",
      image: "/svgs/parents.svg",
      bgColor: "#FFB199"
    },
    {
      title: "Schools & Organizations",
      image: "/svgs/schools.svg",
      bgColor: "#FF9BC9"
    },
  ]

  return (
    <section className="bg-white">
      <div className="w-full md:max-w-6xl mx-auto text-center pb-24 p-4">
        <AnimatedElement delay={0.1} duration={0.5}>
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
            PERSONA
          </Badge>
        </AnimatedElement>
        
        <AnimatedHeading 
          level={2}
          className="text-[40px] font-medium text-secondary-900 leading-tight mb-4"
          delay={0.2}
        >
          Who it&apos;s for?
        </AnimatedHeading>
        
        <AnimatedText 
          className="text-base text-neutral-200 mb-16 max-w-2xl mx-auto leading-relaxed"
          delay={0.3}
        >
          Whether you&apos;re seeking guidance, healing, or just someone to talk to—Guyversation is a safe space for every
          boy and man on a journey to become whole.
        </AnimatedText>

        <AnimatedContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {personas.map((persona, index) => (
            <AnimatedElement
              key={index}
              className="rounded-3xl flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="relative w-full overflow-hidden h-[440px] md:h-auto">
                <Image
                  src={persona.image || persona.bgColor}
                  alt={persona.title}
                  height={400}
                  width={400}
                  objectFit="cover"
                  className="overflow-hidden"
                  // style={{ backgroundColor: persona.bgColor }}
                />
              </div>
              <h3 className="text-[20px] font-medium text-secondary-900 mt-5 mb-5">{persona.title}</h3>
            </AnimatedElement>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  )
}
