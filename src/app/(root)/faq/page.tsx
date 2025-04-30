import { FaqSection } from "@/components/homepage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import FaqForm from "./components/FaqForm";

const FAQ_DATA: FaqTypes[] = [
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

const FaqPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="faq-page">
        <section aria-describedby="" className="bg-[#053F7A] py-12 sm:py-24">
          <div className="container">
            <div
              aria-describedby="content-wrapper"
              className="flex items-center justify-center flex-col gap-y-5 max-w-screen-lg mx-auto"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white">FAQs</h1>
              <p className="text-lg sm:text-xl font-normal text-white text-center">
                Find quick answers to common questions about enrollment,
                courses, and support, everything you need to start your Qurani
                and Arabic journey with ease!
              </p>
            </div>
          </div>
        </section>

        <section aria-describedby="faq-main" className="bg-[#EBEFF3] py-9 sm:py-16">
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="search-area"
                className="max-w-screen-sm mx-auto mb-14"
              >
                <div
                  aria-describedby="content-wrapper"
                  className="flex items-center flex-col gap-y-5 mb-10"
                >
                  <h3 className="text-3xl sm:text-5xl text-center font-bold text-gray-900">
                    Got Questions?
                  </h3>
                  <h5 className="text-lg sm:text-xl font-medium text-gray-700 text-center">
                    We’ve Got Answers
                  </h5>
                </div>

                <div
                  aria-describedby="search-input-wrapper"
                  className="relative"
                >
                  <Input placeholder="Enter the keyword..." className="h-14" />
                  <Button className="absolute right-0 top-1/2 h-full md:h-full -translate-y-1/2 z-[2] bg-[#F4AF2F]">
                    Search
                  </Button>
                </div>
              </div>

              <div aria-describedby="faq-tab-wrapper">
                <Tabs defaultValue="about">
                  <TabsList className="rounded-none gap-x-4 p-0 bg-transparent flex-wrap gap-y-4">
                    <TabsTrigger
                      value="about"
                      className="bg-white rounded-lg text-base font-medium lg:text-base "
                    >
                      About the Academy
                    </TabsTrigger>
                    <TabsTrigger
                      value="courses-coaching"
                      className="bg-white rounded-lg text-base font-medium lg:text-base"
                    >
                      Courses & Teaching
                    </TabsTrigger>
                    <TabsTrigger
                      value="scheduling"
                      className="bg-white rounded-lg text-base font-medium lg:text-base"
                    >
                      Scheduling & Access
                    </TabsTrigger>
                    <TabsTrigger
                      value="enrollment"
                      className="bg-white rounded-lg text-base font-medium lg:text-base"
                    >
                      Fees & Enrollment
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="about">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                    >
                      {FAQ_DATA?.map((faq) => (
                        <AccordionItem key={faq.key} value={faq.key}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section aria-describedby="faq-form" className="py-9 sm:py-16">
          <div className="container">
            <div aria-describedby="main-wrapper">
              <FaqForm />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default FaqPage;
