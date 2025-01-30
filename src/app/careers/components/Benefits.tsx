import { IconContinuousLearning, IconCrossDomain, IconGrowing, IconMoneyCharge, IconSchoolBuilding, IconTechStack } from "@/app/welcome/components/svgIcons";
import WhyJoinCard from "@/app/welcome/components/WhyJoinCard";
import { WhyJoinItemsTypes } from "@/app/welcome/types/whyJoinItems";
import React from "react";


const Benefits = () => {
  return (
    <React.Fragment>
      <section aria-label="benefits" className="bg-white py-6 sm:py-16">
        <div className="container">
          <div aria-label="benefits-wrapper">
            <h5
              aria-label="section-subtitle"
              className="text-pink-500 text-base font-semibold text-center mb-4"
            >
              Benefits
            </h5>
            <h1
              aria-label="title"
              className="text-3xl font-bold text-neutral-800 text-center mb-7 sm:text-5xl sm:mb-10 sm:leading-tight"
            >
              Why Join Us
            </h1>

            <div
              aria-label="benefits-card-wrapper"
              className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 xl:grid-cols-3"
            >
              <WhyJoinCard whyJoinData={WHY_JOIN_ITEMS} className="bg-[#F5F6F8]" iconWrapperClass="bg-white" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Benefits;

const WHY_JOIN_ITEMS: WhyJoinItemsTypes[] = [
  {
    key: "fast-growing-company",
    icon: <IconGrowing className="text-4xl text-[#0062FC]" />,
    title: "Fast growing company",
    shortDescription: "We are at an inflection point to achoeve accelerated.",
  },
  {
    icon: <IconSchoolBuilding className="text-4xl text-[#EE2A52]" />,
    key: "great-arabic-schools",
    shortDescription: "Closely tied and supportive team. Great arabic schools.",
    title: "Great Arabic Schools",
  },
  {
    icon: <IconMoneyCharge className="text-4xl text-[#F5AE14]" />,
    key: "money-charge",
    shortDescription: "As much as you are willing to money and show excellence",
    title: "Money Charge",
  },
  {
    icon: <IconContinuousLearning className="text-4xl text-[#FF60A8]" />,
    key: "dont-stop-learning",
    shortDescription:
      "An atmosphere where learning is always on the to do list",
    title: "Don’t stop learning",
  },
  {
    icon: <IconTechStack className="text-4xl text-light-green-600" />,
    key: "latest-technology-stack",
    shortDescription: "Working experience of cutting edge technologies",
    title: "Latest Technology Stack",
  },
  {
    icon: <IconCrossDomain className="text-4xl text-[#00E4DB]" />,
    key: "cross-domain-exposure",
    shortDescription:
      "Highly passionate and cohesive team of technology and business.",
    title: "Cross domain exposure",
  },
];
