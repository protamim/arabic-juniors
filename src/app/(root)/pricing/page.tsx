"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import PricingCard from "./components/PricingCard";
import { PricingPlanTypes } from "./types/pricingPlanTypes";
import PlanGuideSection from "./components/PlanGuideSection";
import { FaqSection } from "@/components/homepage";
import { FaqTypes } from "@/types";

const FAQ_DATA: FaqTypes[] = [
  {
    key: "1",
    question: "Do you offer any discounts or promotions?",
    answer: `Yes, we offer sibling discounts and seasonal promotions to help you save while you learn.`,
  },
];

const PACKAGES_PLAN: PricingPlanTypes[] = [
  {
    label: "Individual",
    key: "individual",
    children: [
      {
        title: "Beginner",
        price: 200,
        currencyType: "aed",
        features: [
          { title: "1 Class Weekly", included: true },
          { title: "4 Class Monthly", included: true },
          { title: "1-1 Live Class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: false },
          { title: "Weekly Test", included: false },
          { title: "Lesson Cancellations", included: false },
          { title: "Reschedule Class", included: false },
          { title: "Family Discount", included: false },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
      {
        title: "Intermediate",
        price: 300,
        currencyType: "aed",
        features: [
          { title: "2 Class Weekly", included: true },
          { title: "8 Class Monthly", included: true },
          { title: "1-1 Live class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: true },
          { title: "Weekly Test", included: true },
          { title: "Reschedule 2 Class", included: true },
          { title: "Lesson Cancellations", included: false },
          { title: "Family Discount", included: false },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
      {
        title: "Advanced",
        price: 400,
        currencyType: "aed",
        features: [
          { title: "3 Class Weekly", included: true },
          { title: "12 Class Monthly", included: true },
          { title: "1-1 Live class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: true },
          { title: "Weekly Test", included: true },
          { title: "Up to 1 Lesson Cancellations Per Month", included: true },
          { title: "Reschedule 4 Class", included: true },
          { title: "Family 5% Discount", included: true },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
      {
        title: "Expert",
        price: 500,
        currencyType: "aed",
        features: [
          { title: "4 Class Weekly", included: true },
          { title: "16 Class Monthly", included: true },
          { title: "1-1 Live class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: true },
          { title: "Weekly Test", included: true },
          { title: "Up to 3 Lesson Cancellations Per Month", included: true },
          { title: "Reschedule 10 Class", included: true },
          { title: "Family 10% Discount", included: true },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
    ],
  },
  {
    label: "Group Class",
    key: "group-class",
    children: [
      {
        title: "Beginner",
        price: 150,
        currencyType: "aed",
        features: [
          { title: "4 Class Weekly", included: true },
          { title: "2-4 Group Class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: false },
          { title: "Weekly Test", included: false },
          { title: "Lesson Cancellations", included: false },
          { title: "Reschedule Class", included: false },
          { title: "Family Discount", included: false },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
      {
        title: "Intermediate",
        price: 250,
        currencyType: "aed",
        features: [
          { title: "8 Class Weekly", included: true },
          { title: "2-4 Group Class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: true },
          { title: "Weekly Test", included: true },
          { title: "Reschedule 2 Class", included: true },
          { title: "Lesson Cancellations", included: false },
          { title: "Family Discount", included: false },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
      {
        title: "Advanced",
        price: 350,
        currencyType: "aed",
        features: [
          { title: "12 Class Weekly", included: true },
          { title: "2-4 Group Class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: true },
          { title: "Up to 1 Lesson Cancellations Per Month", included: true },
          { title: "Reschedule 4 Class", included: true },
          { title: "Family 5% Discount", included: true },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
      {
        title: "Expert",
        price: 450,
        currencyType: "aed",
        features: [
          { title: "16 Class Weekly", included: true },
          { title: "2-4 Group Class", included: true },
          { title: "Exam Preparation", included: true },
          { title: "Multilingual Teacher", included: true },
          { title: "E-Syllabus access", included: true },
          { title: "Weekly Test", included: true },
          { title: "Up to 3 Lesson Cancellations Per Month", included: true },
          { title: "Reschedule 10 Class", included: true },
          { title: "Family 10% Discount", included: true },
        ],
        actionBtn: {
          url: "/register",
          label: "Lets start",
        },
      },
    ],
  },
];

const PricingPlanPage = () => {
  const [selectedPlan, setSelectedPlan] = React.useState<string>("individual");

  const handleValueChange = (value: string) => {
    // Handle the value change logic here if needed
    // console.log("Selected plan:", value);
    setSelectedPlan(value);
  };

  return (
    <React.Fragment>
      <section
        aria-label="pricing-plan"
        className="relative mb-12 z-[1] before:absolute before:h-96 before:w-full before:bg-gradient-to-r before:from-pink-500 before:from-5% before:via-orange-500 before:via-50% before:to-yellow-500 before:to-100% before:-z-[1]"
      >
        <div className="container pt-10 lg:pt-20">
          <div
            aria-label="pricing-content-wrapper"
            className="bg-white p-5 rounded-xl lg:pt-12 lg:px-9"
          >
            <h1 className="text-3xl font-bold text-neutral-800 text-center mb-4 lg:text-5xl lg:mb-6">
              Your Plan, Your Price
            </h1>

            <p className="text-sm font-normal text-neutral-700 text-center mb-6 lg:text-lg max-w-[540px] mx-auto">
              Our pricing is built to support every learner at every stage.
              <br />
              Pick a plan and take the first step toward mastering Arabic.
            </p>

            <h4 className="text-center text-xl font-medium text-sky-500 mb-6">Transform your Arabic skills in just 60 minutes per class.s</h4>

            <div aria-label="pricing-tab-wrapper">
              <Tabs
                onValueChange={handleValueChange}
                defaultValue="individual"
                className="w-full"
              >
                <TabsList>
                  {PACKAGES_PLAN?.map((plan) => (
                    <React.Fragment key={plan.key}>
                      <TabsTrigger value={plan.key}>{plan.label}</TabsTrigger>
                    </React.Fragment>
                  ))}
                </TabsList>

                {PACKAGES_PLAN?.map((plan) => (
                  <TabsContent key={plan.key} value={plan.key}>
                    <div
                      aria-label="pricing-card-wrapper"
                      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-5"
                    >
                      <PricingCard pricingCardData={plan.children} />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div aria-describedby="section-bottom" className="mt-8">
              {selectedPlan === "individual" ? (
                <ul className="text-neutral-700 font-normal text-base list-disc space-y-1">
                  <li>
                    According to your plan, you must inform the teacher and
                    admin team at least 4 hours in advance to cancel a class.
                  </li>
                  <li>
                    All cancelled or rescheduled classes must be completed
                    within the same month as the invoice date and cannot be
                    carried over to the next month.
                  </li>
                  <li>
                    We offer discounts for families enrolling two or more
                    siblings on the same plan. This does not apply to group
                    lessons.
                  </li>
                  <li>
                    Once you join, an invoice will be generated
                    automatically every 4 weeks.
                  </li>
                </ul>
              ) : (
                <ul className="text-neutral-700 font-normal text-base list-disc space-y-1">
                  <li>
                    According to your plan, all the group’s students must inform
                    the teacher and admin team at least 4 hours in advance to
                    cancel a class.
                  </li>
                  <li>
                    If any student in the group misses a class, it will still be
                    marked as completed for him or her.
                  </li>
                  <li>
                    All cancelled or rescheduled group classes must be completed
                    within the same month as the invoice date and cannot be
                    carried over to the next month.
                  </li>
                  <li>We do not offer any discount in group classes.</li>
                  <li>
                    Once you join, an invoice will be generated automatically
                    every 4 weeks.
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <PlanGuideSection />
      <FaqSection faqData={FAQ_DATA} />
    </React.Fragment>
  );
};

export default PricingPlanPage;
