"use client";

import BlogCard from "@/components/homepage/BlogCard";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CareerDetailsPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <section
        aria-label="career-details-page"
        className="relative z-[1] before:absolute before:w-full before:h-72 before:bg-gradient-to-r before:from-[#FF60A8] before:from-5% before:via-[#FB6238] before:via-50% before:to-[#F5AE14] before:to-100% before:-z-[1]"
      >
        <div className="container">
          <div aria-label="career-details-wrapper" className="pt-10 sm:pt-20">
            <div
              aria-describedby="content-wrapper"
              className="bg-white sm:px-20 px-6 py-8 sm:py-12 rounded-xl"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-8">
                Academic Support Assistant
              </h2>

              <div aria-describedby="meta" className="flex items-center mb-12">
                <p className="px-3 first:pl-0 last:pr-0 border-r last:border-0 border-neutral-400 text-xl sm:text-2xl font-semibold text-neutral-600">
                  Permanent
                </p>
                <p className="px-3 first:pl-0 last:pr-0 border-r last:border-0 border-neutral-400 text-xl sm:text-2xl font-semibold text-neutral-600">
                  Onsite
                </p>
              </div>

              <div aria-describedby="job-description" className="mb-12">
                <h4
                  aria-describedby="title"
                  className="pb-5 mb-8 border-b w-full border-b-neutral-400 text-xl sm:text-3xl font-bold text-neutral-800"
                >
                  Job Description
                </h4>

                <div aria-describedby="text">
                  <p className="text-base sm:text-lg font-normal text-neutral-700">
                    As an Applied Research Scientist, you will be an innovator
                    and expert at exploring and solving some of the most complex
                    problems at the cutting edge of digital learning using the
                    state of the art AI technologies. Broadly, you will be
                    tasked with identifying and tackling complex problems
                    surrounding digital product development to ultimately impact
                    and advance BYJU'S product evolution.
                    <br />
                    <br />
                    To be effective in this role, you will need to have a deep
                    understanding of AI technologies, strong problem solving,
                    and work effectively with engineers, project managers, and
                    other researchers to innovate BYJU'S products. A deep
                    understanding of AI is needed to identify impactful problems
                    and propose effective solutions and influence the direction
                    of fundamental research. Depending on your scope, you would
                    be required to lead and motivate other scientists or
                    engineers to develop workstream and product concepts.
                    <br /> <br />
                    Senior candidates could support or build a team of
                    world-class AI researchers and ML engineers but ultimately
                    bring their deep AI knowledge to build zero to one projects.
                  </p>
                </div>
              </div>

              <div aria-describedby="success-applicant" className="mb-8">
                <h4 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-6">
                  The Successful Applicant
                </h4>

                <div aria-describedby="content">
                  <p className="text-base sm:text-lg font-normal text-neutral-700 mb-4">
                    All industry backgrounds are encouraged to apply, the key
                    desire is wanting to make a difference to our younger
                    generation and presents an opportunity to give something
                    back for social good.
                    <br /> <br />
                    Candidates should have experience in some of the following:
                  </p>

                  <ul className="text-base sm:text-lg font-normal text-neutral-700 list-disc pl-6 sm:pl-10">
                    <li>
                      Masters or Ph.D. degree in computer science, or related
                      technical, math, or scientific field.
                    </li>

                    <li>
                      Strong knowledge and experience in applied research in AI,
                      including but not limited to NLP, computer vision,
                      reinforcement learning, recommender systems, or AI product
                      development.
                    </li>

                    <li>
                      Strong knowledge of foundational concepts in machine
                      learning and AI.
                    </li>

                    <li>
                      Being able to identify high-impact problems and execute
                      complex research and development projects in AI, end2end.
                      Preferably, this is shown by a proven track record of
                      significant product impact using advanced AI technologies.
                    </li>

                    <li>
                      Hands-on experience in building models with deep learning
                      frameworks such as PyTorch, Tensorflow, or similar.
                    </li>

                    <li>
                      Fluent in at least one programming language, preferably
                      Python.
                    </li>

                    <li>
                      Strong written and oral communication skills to
                      communicate effectively internally within and between
                      organizations.
                    </li>
                  </ul>
                </div>
              </div>

              <div aria-describedby="nice-to-have">
                <h4 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-6">
                  Nice to have
                </h4>

                <ul className="text-base sm:text-lg font-normal text-neutral-700 list-disc pl-6 sm:pl-10">
                  <li>
                    Track record of publications in top-tier venues such as
                    NeurIPS, ACL, ICML, EMNLP, CVPR, ICCV, etc.
                  </li>

                  <li>
                    Open-source contributions, especially in the space of AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CareerDetailsPage;
