import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Dyker Heights and nearby areas in Brooklyn, NY including Bay Ridge, Bensonhurst, Bath Beach, and Borough Park.",
  },
  {
    question: "What types of pets do you care for?",
    answer: "We care for dogs, cats, birds, reptiles, aquatic pets, and any other loving pets you have in your family! No pet is too big or too small.",
  },
  {
    question: "What are your hours of operation?",
    answer: "We are open 24 hours to accommodate your schedule and provide peace of mind for your pet care needs.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can call us at (347) 633-8034 or email us at fnppetcare@gmail.com. We'll set up a time that works for you and your pet!",
  },
  {
    question: "Do you offer overnight boarding?",
    answer: "Yes! We offer boarding and sitting services where your pet stays in a loving environment and feels right at home.",
  },
  {
    question: "What is the Pet Taxi service?",
    answer: "Our Pet Taxi provides safe and comfortable transportation for your pet to any destination, such as vet appointments, grooming, or relocations.",
  },
];

const FAQSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-body text-base md:text-lg font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
