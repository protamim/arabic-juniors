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

const FaqSection = () => {
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
                      Arabic student class 1
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            <div aria-label="faq-column-right" className="w-full h-full">
              <Accordion type="single" collapsible className="w-full mb-12">
                {FAQ_DATA?.map((faq) => (
                  <AccordionItem key={faq.key} value={faq.key}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Button asChild className="w-full">
                <Link href="/register#registration-form-wrapper">Book your free session now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FaqSection;

const FAQ_DATA = [
  {
    key: "first-faq",
    question: "What is the tutor curriculum?",
    answer: `A tutor curriculum is a structured plan with lessons, methods, and goals tailored to a student's needs. It includes assessments, topics, teaching strategies, feedback, and customization for effective learning.`,
  },
  {
    key: "second-faq",
    question: "Do you have female educators for female students?",
    answer: `Yes, many platforms provide female educators for female students, ensuring comfort, cultural alignment, and personalized learning. Check with the specific institution or tutoring service for availability.`,
  },
  {
    key: "third-faq",
    question: "How do you keep children safe?",
    answer: `Child safety is ensured through background checks for educators, secure online platforms, parental monitoring features, safe physical environments, and adherence to child protection policies and guidelines.`,
  },
  {
    key: "fourth-faq",
    question: "Do you have special teachers for female students?",
    answer: `Yes, many institutions offer special female teachers for female students to ensure comfort, cultural alignment, and a supportive learning environment. Availability depends on the specific institution or platform.`,
  },
  {
    key: "fifth-faq",
    question: "Do you offer courses for adults?",
    answer: `Yes, many platforms offer courses for adults, covering a wide range of subjects such as professional development, personal growth, language learning, and technical skills. Availability depends on the platform or institution.`,
  },
  {
    key: "sixth-faq",
    question: "Could you elucidate the fee structure?",
    answer: `The fee structure typically includes per-course fees, subscription models, tiered pricing, or payment plans. Discounts may be available for early registration or bundles, varying by platform or institution.`,
  },
  {
    key: "seventh-faq",
    question: "How many classes shall there per month?",
    answer: `The number of classes per month varies depending on the course or program. Typically, it can range from 4 to 12 classes per month, depending on the course frequency (weekly or bi-weekly).`,
  },
];
