import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import PricingCard from "./components/PricingCard";
import { PricingPlanTypes } from "./types/pricingPlanTypes";

const PricingPlanPage = () => {
  return (
    <React.Fragment>
      <section
        aria-label="pricing-plan"
        className="relative mb-12 z-[1] before:absolute before:h-96 before:w-full before:bg-gradient-to-r before:from-pink-500 before:from-5% before:via-orange-500 before:via-50% before:to-yellow-500 before:to-100% before:-z-[1]"
      >
        <div className="container pt-10">
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
                  <React.Fragment key={plan.key}>
                    <TabsContent value={plan.key}>
                      <div
                        aria-label="pricing-card-wrapper"
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-5"
                      >
                        <PricingCard pricingCardData={plan.children} />
                      </div>
                    </TabsContent>
                  </React.Fragment>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PricingPlanPage;

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
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
      {
        title: "Intermediate",
        price: 300,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
      {
        title: "Advanced",
        price: 400,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
      {
        title: "Expert",
        price: 500,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
    ],
  },
  {
    label: "Group Class",
    key: "group-class",
    children: [
      {
        title: "Group Class 1",
        price: 350,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
      {
        title: "Group Class 2",
        price: 550,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
      {
        title: "Group Class 3",
        price: 650,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
      {
        title: "Group Class 4",
        price: 800,
        currencyType: "aed",
        features: [
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
          { title: "2 Classes" },
        ],
        actionBtn: { url: "/register", label: "Lets start" },
      },
    ],
  },
];
