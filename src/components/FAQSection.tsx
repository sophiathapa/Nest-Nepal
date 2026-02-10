import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Google Workspace compatible with my current email client?",
    a: "Yes, Google Workspace is compatible with most email clients including Outlook, Apple Mail, and Thunderbird through IMAP/POP settings.",
  },
  {
    q: "Can I transfer my current Google Workspace account to Nest Nepal?",
    a: "Yes, you can easily transfer your existing Google Workspace account to Nest Nepal. Our team will guide you through the seamless migration process.",
  },
  {
    q: "Are there any fees for transferring a domain to Nest Nepal?",
    a: "No, there are no additional fees for transferring your domain to Nest Nepal. We handle the transfer process at no extra cost.",
  },
  {
    q: "Are there any hidden charges for Nest Nepal Customers?",
    a: "No, we maintain complete transparency in our pricing. The price you see is the price you pay, with no hidden charges.",
  },
  {
    q: "What all does Gsuite productivity suite include?",
    a: "Google Workspace includes Gmail, Drive, Meet, Calendar, Chat, Docs, Sheets, Slides, Forms, Sites, and many more productivity tools.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-20 ">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col items-center justify-center section-container max-w-3xl">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
              Frequently Asked Questions{" "}
              <span className="text-primary">(FAQs)</span>
            </h2>
          </div>
          <div className="border-t border-black/30">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm md:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
