import React from "react";
import {
  IconBoard,
  IconCustomizedLearning,
  IconEmbracing,
  IconOpenBook,
} from "../svgIcons";
import { OurValuesTypes } from "../types";
import { cn } from "@/lib/utils";

const OurValues = () => {
  const colors = ["#FB6238", "#A6CF4A", "#FF60A8", "#F5AE14"];
  return (
    <React.Fragment>
      <section aria-label="our-values-section" className="py-20 overflow-hidden bg-[#F3F7F4] z-[1] relative before:absolute before:top-0 before:left-0 before:w-60 before:h-72 before:bg-light-green-500/80 before:blur-[300px] before:-z-[1]">
        <div className="container">
          <div aria-label="our-values-wrapper">
            <div
              aria-label="our-values-top"
              className="flex flex-col items-center justify-center mb-12"
            >
              <h6
                aria-label="subtitle"
                className="mb-6 text-pink-500 text-base font-semibold"
              >
                Our Values
              </h6>

              <h3
                aria-label="section-title"
                className="text-5xl font-bold text-neutral-900 mb-4"
              >
                Discover our professional mentors
              </h3>

              <p
                aria-label="short-description"
                className="text-neutral-400 text-base font-medium"
              >
                Choose from hundreds of courses from specialist organizations
              </p>
            </div>

            <div
              aria-label="our-values-card-wrapper"
              className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6"
            >
              {OUR_VALUES.map((value, index) => (
                <React.Fragment key={value.key}>
                  <div
                    aria-label="values-card"
                    className="p-6 rounded-2xl bg-white flex items-start gap-x-5"
                  >
                    <span
                      aria-label="icon-wrapper"
                      className={cn(
                        "flex-shrink-0 flex-grow-0 basis-auto p-5 rounded-2xl flex items-center justify-center max-w-max"
                      )}
                      style={{ background: colors[index % colors.length] }}
                    >
                      {value.icon}
                    </span>

                    <div
                      aria-label="card-column-right"
                      className="flex flex-col gap-y-2"
                    >
                      <h4
                        aria-label="card-title"
                        className="text-neutral-800 font-semibold text-2xl"
                      >
                        {value.title}
                      </h4>
                      <p
                        aria-label="card-description"
                        className="text-neutral-600 text-base font-normal"
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurValues;

const OUR_VALUES: OurValuesTypes[] = [
  {
    key: "customized-arabic-learning",
    title: "Customized Arabic Learning",
    description:
      "We believe every learner is unique, so we tailor lessons to meet individual needs for effective Arabic mastery.",
    icon: <IconCustomizedLearning className="text-[2.5rem] text-white" />,
  },
  {
    key: "embracing-arabic-essence",
    title: "Embracing Arabic Essence",
    description:
      "We believe every learner is unique, so we tailor lessons to meet individual needs for effective Arabic mastery.",
    icon: <IconEmbracing className="text-[2.5rem] text-white" />,
  },
  {
    key: "expert-career-strategist",
    title: "Expert Career Strategist",
    description:
      "With over 10 years of experience in career counseling, our mentors specialize in helping you design the perfect path to achieve your professional goals.",
    icon: <IconOpenBook className="text-[2.5rem] text-white" />,
  },
  {
    key: "creative-business-consultant",
    title: "Creative Business Consultant",
    description:
      "From startups to scaling, our mentors provide creative insights and business strategies to grow your vision into a successful enterprise.",
    icon: <IconBoard className="text-[2.5rem] text-white" />,
  },
];
