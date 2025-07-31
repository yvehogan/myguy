"use client";
import { Badge } from "@/components/ui/badge"
import { 
  AnimatedContainer, 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element"

export default function MissionVisionSection() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-6xl mx-auto p-4">
        <AnimatedElement delay={0.1}>
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
            OUR GOAL
          </Badge>
        </AnimatedElement>
        
        <AnimatedHeading 
          level={2}
          className="text-[40px] font-medium text-secondary-900 leading-tight mb-16"
          delay={0.2}
        >
          Mission & Vision
        </AnimatedHeading>
        
        <AnimatedContainer 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <AnimatedElement
            className="bg-primary-200 rounded-3xl p-10 text-left"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h3 className="text-[32px] font-medium text-secondary-900 mb-4">Our Mission</h3>
            <p className="text-base text-secondary-900 leading-relaxed">
              To redefine masculinity in Africa—through healing, mentoring, and connection.
            </p>
          </AnimatedElement>
          
          <AnimatedElement
            className="bg-primary-200 rounded-3xl p-10 text-left"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <h3 className="text-[32px] font-medium text-secondary-900 mb-4">Our Vision</h3>
            <p className="text-base text-secondary-900 leading-relaxed">
              A world where boys become whole men—emotionally aware, mentally healthy, and boldly human.
            </p>
          </AnimatedElement>
        </AnimatedContainer>
      </div>
    </section>
  )
}
