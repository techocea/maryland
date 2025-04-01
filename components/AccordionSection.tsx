import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSection = () => {
  return (
    <main className="h-full py-20">
      <div className="flex flex-col gap-y-4 text-center items-center justify-center">
        <h1 className="sub-heading">faq</h1>
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold capitalize">
          <span className="text-primary">clear</span> your doubts
        </h3>
      </div>
      <div className="w-full flex items-center justify-center mt-6 md:mt-10">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[300px] sm:max-w-md lg:max-w-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm md:text-lg text-left">
              How can I submit my application?
            </AccordionTrigger>
            <AccordionContent>
              You can apply through our student portal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm md:text-lg text-left">
              What are the services we provide?
            </AccordionTrigger>
            <AccordionContent>
              You can apply through our student portal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm md:text-lg text-left">
              How can i find a university for my needs?
            </AccordionTrigger>
            <AccordionContent>
              You can apply through our student portal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm md:text-lg text-left">
              What are the requirements for applying to a unniversity?
            </AccordionTrigger>
            <AccordionContent>
              You can apply through our student portal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sm md:text-lg text-left">
              How can i apply for scholarships or financial aid?
            </AccordionTrigger>
            <AccordionContent>
              You can apply through our student portal.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};
export default AccordionSection;
