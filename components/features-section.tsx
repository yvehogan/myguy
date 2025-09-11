"use client";
import { Badge } from "@/components/ui/badge"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText,
} from "@/components/ui/animated-element"

export default function FeaturesSection() {
  const features = [
    {
      icon: "/images/tribe.png",
      title: "Close Mentorship",
      description: "A big brother in your pocket. Someone who's been there, gets it, and has time for you.",
    },
    {
      icon: "/images/involved.png",
      title: "Access Therapy",
      description: "Real professionals. No judgment. Just the tools to help you untangle what's on your mind.",
    },
    {
      icon: "/images/find.png",
      title: "Community",
      description: "Your tribe of guys who talk, listen, and show up, even on the quiet days.",
    },
    {
      icon: "/images/therapy.png",
      title: "Mood Check-ins",
      description: "A quick “how's your spirit today?” because your feelings matter here.",
    },
    {
      icon: "/images/virtual.png",
      title: "Journaling",
      description: "Drop your thoughts where they're safe. No filters, no likes, just truth.",
    },
    {
      icon: "/images/masterclass.png",
      title: "Challenges & Courses",
      description: "Learn. Unlearn. Level up. Bite-sized lessons that stick with you for life.",
    },
  ]

  return (
    <section className="bg-white">
      <div className="w-full p-5 md:max-w-6xl mx-auto text-center py-16">
        <AnimatedElement delay={0.1} duration={0.5}>
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
            FEATURES
          </Badge>
        </AnimatedElement>
        
        <AnimatedHeading 
          level={2}
          className="text-[34px] md:text-[40px] font-medium text-secondary-900 leading-tight mb-4"
          delay={0.2}
        >
          Redefining Masculinity, One Feature at a Time
        </AnimatedHeading>
        
        <AnimatedText 
          className="text-lg font-light md:text-base text-neutral-200 mb-16 max-w-2xl mx-auto leading-relaxed"
          delay={0.3}
        >
         Discover tools designed to help boys and men heal, open up, and become their best selves—together.
        </AnimatedText>

        <AnimatedContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <AnimatedElement
              key={index}
              className="relative rounded-3xl w-full h-96 flex flex-col justify-end overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div
                className="absolute inset-0 w-full h-[450px] md:h-full bg-cover bg-center bg-[#F3E9FD]"
                style={{
                  backgroundImage: `url('${feature.icon}')`,
                }}
              />
              <div className="relative z-10 w-full items-start text-left px-6 pb-6">
                <h3 className="text-[26px] font-medium text-secondary-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-200 lead font-light text-base">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  )
}
