"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";

import { AccordionArrowIcon } from "@/components/icons";
import { faqData } from "@/data/faqData";

const FaqList = () => {
  return (
    <Accordion
      variant="splitted"
      itemClasses={{
        base: "px-5 mb-4 last:mb-0 rounded-[24px] backdrop-blur-[14.1px] bg-[rgba(255,255,255,0.26)] shadow-[inset_0px_4px_14.8px_#0000001F] xl:px-8 xl:mb-5 xl:rounded-[39px]",
        trigger: "py-[14px] xl:py-[27px]",
        title:
          "font-manrope font-light text-[12px] leading-[20px] xl:text-[18px]",
        indicator: "data-[open=true]:rotate-180 size-6",
        content: "pb-[14px] xl:text-[24px] xl:pb-[27px]",
      }}
    >
      {faqData.map(({ answer, question }) => (
        <AccordionItem
          key={question}
          title={question}
          classNames={{}}
          indicator={<AccordionArrowIcon />}
        >
          {answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
