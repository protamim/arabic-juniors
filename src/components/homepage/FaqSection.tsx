import { ShafiullahImage } from "@/assets";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaqTypes } from "@/types";

interface FaqSectionProps {
  faqData: FaqTypes[]
}

const FaqSection: React.FC<FaqSectionProps> = ({faqData}) => {
  return (
    <React.Fragment>
      <section aria-label="faq-section-home" className="pt-10 md:pt-28 pb-11">
        <div className="container">
          <div
            aria-label="faq-content-wrapper"
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6 place-items-center justify-between"
          >
            <div aria-label="faq-column-left" className="h-full">
              <h3 className="text-neutral-900 text-4xl sm:text-5xl leading-tight sm:leading-tight font-bold mb-16">
                We are often <span className="text-orange-500">Asked</span>
              </h3>

              <div
                aria-label="teacher-info-wrapper"
                className="max-w-[26.125rem] flex flex-col justify-center items-center"
              >
                <div
                  aria-label="teacher-image-wrapper"
                  className="max-w-[22.25rem]"
                >
                  <Image
                    src={ShafiullahImage}
                    width={2000}
                    height={1333}
                    alt="shafiullah teacher"
                    priority
                  />
                </div>

                <div
                  aria-label="info"
                  className="bg-yellow-500 py-5 px-6 rounded-xl flex flex-col items-center justify-center w-full"
                >
                  <h6 className="text-3xl font-bold text-white">
                    Shafiullah |{" "}
                    <span className="text-lg font-normal">
                      {" "}
                      Student Grade 4
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            <div aria-label="faq-column-right" className="w-full h-full flex flex-col justify-center items-center">
              <Accordion type="single" collapsible className="w-full mb-12">
                {faqData?.map((faq) => (
                  <AccordionItem key={faq.key} value={faq.key}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Button asChild className="w-full">
                <Link href="/register">Book your free session now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FaqSection;


