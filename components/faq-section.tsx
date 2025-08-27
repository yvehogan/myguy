"use client";
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  AnimatedElement, 
  AnimatedHeading, 
  AnimatedText 
} from "@/components/ui/animated-element"

export default function FaqSection() {
  const faqs = [
    {
      question: "What is MYGUY?",
      answer:
        "MYGUY is a mentorship and mental wellness platform built for boys and men. We connect you with trusted mentors, licensed therapists, and supportive communities so you can grow, heal, and thrive.",
    },
    {
      question: "Who can use MYGUY?",
      answer:
        "Any male, from teenage boys to grown men, looking for guidance, support, or a safe space to talk. Parents and schools can also sign up to support the young men in their care.",
    },
    {
      question: "How does mentorship work?",
      answer:
        "You get matched with a mentor based on your goals, career interests, and life stage. You can meet online, set your preferred schedule, and work together to achieve your personal or professional goals."
    },
    {
      question: "Is therapy on MYGUY confidential?",
      answer:
        "Yes. All therapy sessions are private and handled by licensed professionals. What you share stays between you and your therapist.",
    },
    {
      question: "Do I have to pay to use MYGUY?",
      answer:
        "Most features are free, like community access and basic mentorship. Therapy sessions and certain premium programs may require a fee.",
    },
    {
      question: "How do I know my mentor or therapist is legit?",
      answer:
        "Every mentor and therapist on MYGUY is vetted, with identity verification and professional credentials checked before they can work with you.",
    },
    {
      question: "Can parents use MYGUY?",
      answer:
        "Yes. Parents can create accounts, connect their children with mentors or therapists, track progress, and be part of parent support groups.",
    },
    {
      question: "Can I switch my mentor or therapist?",
      answer:
        "Absolutely. If you feel you're not a good fit, you can request a change anytime, no hard feelings.",
    },
    {
      question: "How do mood check-ins and journaling work?",
      answer:
        "You can log your daily mood, track changes over time, and keep private notes or reflections in your journal. It's your personal space to reflect and grow.",
    },
    {
      question: "Is MYGUY available worldwide?",
      answer:
        "We're starting in select regions, but we're expanding. Check the app to see if we're live in your area.",
    },
  ]

  return (
    <section className="bg-white py-16 px-4 md:px-16 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <AnimatedElement delay={0.1}>
          <Badge className="bg-transparent border border-secondary-400 text-secondary-400 px-5 py-2 rounded-full mb-6">
            FAQ
          </Badge>
        </AnimatedElement>
        
        <AnimatedHeading 
          level={2}
          className="text-[40px] font-medium text-secondary-900 leading-tight mb-4"
          delay={0.2}
        >
          Get the answers you&apos;re looking for
        </AnimatedHeading>
        
        <AnimatedText 
          className="text-base text-neutral-200 mb-16 max-w-2xl mx-auto leading-relaxed"
          delay={0.3}
        >
          We understand that choosing the right mentorship program is a big decision, and you may have some questions.
        </AnimatedText>

        <AnimatedElement
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#9E9E9E] rounded-[20px] px-6 py-4 bg-white text-left last:mb-20 last:pb-5"
              >
                <AccordionTrigger className="text-secondary-900 text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-200 font-light text-sm leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedElement>
      </div>
    </section>
  )
}
