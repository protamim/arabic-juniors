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
    question: "What is the cost of the Arabic tuition classes?",
    answer: `Prices vary by package—based on session frequency and class type (group or one-on-one). Check our pricing plans for details.`,
  },
  {
    key: "2",
    question: "Do you offer any discounts or promotions?",
    answer: `Yes, we offer sibling discounts, long-term enrollment deals, and seasonal promotions.`,
  },
  {
    key: "3",
    question: "How can I choose the best pricing plan for my child?",
    answer: `Choose based on your child’s needs and schedule. Contact us for a free consultation if you need help deciding.`,
  },
  {
    key: "4",
    question: "What payment methods do you accept?",
    answer: `We accept credit/debit cards, bank transfers, and PayPal.`,
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
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
          url: "/register#registration-form-wrapper",
          label: "Lets start",
        },
      },
    ],
  },
];

const PricingPlanPage = () => {
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
              Pricing Plan
            </h1>

            <p className="text-sm font-normal text-neutral-700 text-center mb-6 lg:text-lg max-w-[477px] mx-auto lg:mb-14">
              We would love to hear from you Feel free to reach out using the
              below details.
            </p>

            <div aria-label="pricing-tab-wrapper">
              <Tabs defaultValue="individual" className="w-full">
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
              <ul className="text-neutral-700 font-normal text-base">
                <li>
                  * As per the selected plan, any modifications or cancellations
                  must be communicated to the teacher and admin team at least 4
                  hours in advance.
                </li>
                <li>
                  ** All rescheduled or cancelled classes must be made up within
                  the same month as the invoice; they cannot be carried forward.
                </li>
                <li>
                  *** We offer discounts for families enrolling two or more
                  siblings on the same plan. This does not apply to group
                  lessons.
                </li>
                <li>
                  **** An invoice will be automatically generated monthly, every
                  4 weeks from the date of enrollment.
                </li>
              </ul>
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
