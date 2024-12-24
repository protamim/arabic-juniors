import { DeliverLeftImage } from "@/assets";
import Image from "next/image";
import React from "react";
import { ConceptualClarityIcon, MultilingualTeachersIcon, PersonalizeLearningIcon, PrivateTutoringIcon } from "./svgIcons";

const PROGRAMS_LIST = [
  {
    title: "Live 1-on-1 Private Tutoring",
    short_description: "Undivided attention for unmatched outcomes",
    icon: <PrivateTutoringIcon className="text-3xl text-[#0062FC]" />,
  },
  {
    title: "100% Personalized Learning",
    short_description: "Technology that adapts every learner's needs",
    icon: <PersonalizeLearningIcon className="text-3xl text-[#EE2A52]" />,
  },
  {
    title: "Multilingual Teachers",
    short_description: "Proven pedagogy, designed by experts",
    icon: <MultilingualTeachersIcon className="text-3xl text-yellow-500" />,
  },  {
    title: "Complete Conceptual Clarity",
    short_description: "Expert teachers, engaging videos & interactive ",
    icon: <ConceptualClarityIcon className="text-3xl text-pink-500" />,
  },
];

const DeliverResult = () => {
  return (
    <React.Fragment>
      <section
        aria-label="deliver-result-section-home"
        className="pt-14 pb-16 bg-neutral-50"
      >
        <div className="container">
          <div aria-label="deliver-content">
            <h3 className="text-5xl font-bold text-neutral-950 text-center mb-11">
              Programs designed to{" "}
              <span className="text-orange-500">Deliver Results</span>
            </h3>

            <div
              aria-label="deliver-result-wrapper"
              className="flex items-center gap-x-14"
            >
              <div
                aria-label="deliver-left-column"
                className="max-w-[34rem] mr-auto"
              >
                <Image
                  src={DeliverLeftImage}
                  width={1088}
                  height={1088}
                  alt="deliver result in juniors"
                  priority
                />
              </div>

              <div aria-label="deliver-right-column" className="flex-1">
                <ul aria-label="result-lists" className="flex flex-col gap-y-5">
                  {PROGRAMS_LIST?.map((program, index) => (
                    <li
                      key={index}
                      aria-label="result-item"
                      className="bg-white p-4 rounded-2xl border border-neutral-100 flex items-center gap-x-9 transition-shadow ease-in-out duration-300 hover:shadow-3xl"
                    >
                      {program.icon}
                      <div className="flex flex-col gap-y-3">
                        <h5 className="text-2xl font-semibold text-neutral-900">
                          {program.title}
                        </h5>
                        <p className="text-xl font-normal text-neutral-600">
                          {program.short_description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DeliverResult;
