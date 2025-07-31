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
      question: "What features are included in your mentorship plans?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Quisque cursus nisl adipiscing commodo Lorem non amet, non. risus diam ipsum ex elit fringilla at, sollicitudin. Nam non libero, placerat quis vitae tincidunt Ut at sollicitudin. vitae massa eu placerat sed porta Lorem ullamcorper enim, eget sit nec gravida vitae tempor nibh Vestibulum placerat. tincidunt tincidunt ultrices scelerisque luctus tempor Cras amet, faucibus non adipiscing sit dui sollicitudin. non lacus sit hendrerit scelerisque",
    },
    {
      question: "What is the eligibility criteria for mentors?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Quisque cursus nisl adipiscing commodo Lorem non amet, non. risus diam ipsum ex elit fringilla at, sollicitudin. Nam non libero, placerat quis vitae tincidunt Ut at sollicitudin. vitae massa eu placerat sed porta Lorem ullamcorper enim, eget sit nec gravida vitae tempor nibh Vestibulum placerat. tincidunt tincidunt ultrices scelerisque luctus tempor Cras amet, faucibus non adipiscing sit dui sollicitudin. non lacus sit hendrerit scelerisque",
    },
    {
      question: "How do I join the waitlist?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Quisque cursus nisl adipiscing commodo Lorem non amet, non. risus diam ipsum ex elit fringilla at, sollicitudin. Nam non libero, placerat quis vitae tincidunt Ut at sollicitudin. vitae massa eu placerat sed porta Lorem ullamcorper enim, eget sit nec gravida vitae tempor nibh Vestibulum placerat. tincidunt tincidunt ultrices scelerisque luctus tempor Cras amet, faucibus non adipiscing sit dui sollicitudin. non lacus sit hendrerit scelerisque",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Quisque cursus nisl adipiscing commodo Lorem non amet, non. risus diam ipsum ex elit fringilla at, sollicitudin. Nam non libero, placerat quis vitae tincidunt Ut at sollicitudin. vitae massa eu placerat sed porta Lorem ullamcorper enim, eget sit nec gravida vitae tempor nibh Vestibulum placerat. tincidunt tincidunt ultrices scelerisque luctus tempor Cras amet, faucibus non adipiscing sit dui sollicitudin. non lacus sit hendrerit scelerisque",
    },
    {
      question: "What kind of support is available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent Quisque cursus nisl adipiscing commodo Lorem non amet, non. risus diam ipsum ex elit fringilla at, sollicitudin. Nam non libero, placerat quis vitae tincidunt Ut at sollicitudin. vitae massa eu placerat sed porta Lorem ullamcorper enim, eget sit nec gravida vitae tempor nibh Vestibulum placerat. tincidunt tincidunt ultrices scelerisque luctus tempor Cras amet, faucibus non adipiscing sit dui sollicitudin. non lacus sit hendrerit scelerisque",
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
                className="border border-[#9E9E9E] rounded-[20px] px-6 py-4 bg-white text-left last:mb-20 last:pb-10"
              >
                <AccordionTrigger className="text-secondary-900 text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-200 font-light text-sm leading-relaxed pt-4">
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
