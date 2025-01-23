import { CurricolumnLeft } from "@/assets";
import Image from "next/image";
import React from "react";
import {
  KgClassStudentIcon,
  NativeArabicUserIcon,
  NonArabUserIcon,
} from "./svgIcons";

const ArabicCurriculumn = () => {
  return (
    <React.Fragment>
      <section
        aria-label="arabic-curricolumn-section"
        className="py-10 sm:py-16"
      >
        <div className="container">
          <div
            aria-label="arabic-curricolumn-wrapper"
            className="flex items-center gap-x-20 flex-col gap-y-10 lg:flex-row"
          >
            <div
              aria-label="arabic-curricolumn-left"
              className="max-w-[28.75rem] mr-auto"
            >
              <Image
                src={CurricolumnLeft}
                width={920}
                height={1220}
                priority
                alt="Experience in UAE School Arabic Curriculum"
              />
            </div>

            <div aria-label="arabic-curricolumn-right">
              <h3 className="text-neutral-900 text-3xl sm:text-5xl font-bold leading-tight sm:leading-tight mb-6">
                Experience in UAE School{" "}
                <span className="text-orange-500">Arabic Curriculum</span>
              </h3>

              <p className="text-neutral-700 font-normal text-sm sm:text-lg mb-6">
                At Brilliant Tuition, we pride ourselves on transforming
                learning into a personalized and engaging journey.{" "}
              </p>

              <ul
                aria-label="arabic-curricolumn-lists"
                className="flex flex-col gap-y-10"
              >
                <li
                  aria-label="curricolumn-list-item"
                  className="flex items-center gap-x-5"
                >
                  <span className="flex items-center justify-center bg-[#0062FC] w-16 h-16 rounded-full p-3 flex-shrink-0 flex-grow-0 basis-auto drop-shadow-[0px_19px_26px_rgba(0,0,0,0.10)]">
                    <NativeArabicUserIcon className="text-3xl text-white" />
                  </span>
                  <div className="flex flex-col gap-y-3">
                    <h4 className="text-neutral-800 font-bold text-lg sm:text-2xl">
                      Native Arabic Teachers
                    </h4>
                    <p className="text-neutral-700 font-normal text-sm sm:text-base">
                      All 3 students will be taught the same concept by your
                      personal mentor.
                    </p>
                  </div>
                </li>

                <li
                  aria-label="curricolumn-list-item"
                  className="flex items-center gap-x-5"
                >
                  <span className="flex items-center justify-center bg-yellow-500 w-16 h-16 rounded-full p-3 flex-shrink-0 flex-grow-0 basis-auto drop-shadow-[0px_19px_26px_rgba(0,0,0,0.10)]">
                    <NonArabUserIcon className="text-3xl text-white" />
                  </span>
                  <div className="flex flex-col gap-y-3">
                    <h4 className="text-neutral-800 font-bold text-lg sm:text-2xl">
                      Specially for Non-Arabs Students
                    </h4>
                    <p className="text-neutral-700 font-normal text-sm sm:text-base">
                      Our best online tutors ensure that they have built a
                      strong rapport with every student.
                    </p>
                  </div>
                </li>

                <li
                  aria-label="curricolumn-list-item"
                  className="flex items-center gap-x-5"
                >
                  <span className="flex items-center justify-center bg-light-green-500 w-16 h-16 rounded-full p-3 flex-shrink-0 flex-grow-0 basis-auto drop-shadow-[0px_19px_26px_rgba(0,0,0,0.10)]">
                    <KgClassStudentIcon className="text-3xl text-white" />
                  </span>
                  <div className="flex flex-col gap-y-3">
                    <h4 className="text-neutral-800 font-bold text-lg sm:text-2xl">
                      From Class KG1 to 10 Grade
                    </h4>
                    <p className="text-neutral-700 font-normal text-sm sm:text-base">
                      With only three students in  class, the tutor can give
                      each student individual attention.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ArabicCurriculumn;
