import Image from "next/image";
import React from "react";
import { IconCustomizedLearning, IconMission } from "./svgIcons";
import OurValues from "./components/OurValues";

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <section
        aria-label="about-us-hero"
        className="py-20 bg-gradient-to-r from-[#FF60A8] from-5% via-[#FB6238] via-50% to-[#F5AE14] to-[101%]"
      >
        <div className="container">
          <div
            aria-label="about-us-wrapper"
            className="flex items-center gap-x-8 justify-between"
          >
            <div aria-label="column-left" className="max-w-screen-md">
              <h5
                aria-label="subtitle"
                className="text-lg font-medium text-[#FFDA62] mb-2"
              >
                About us
              </h5>
              <h1
                aria-label="title"
                className="text-5xl font-bold text-white leading-tight mb-3"
              >
                Creating a better future for each learner
              </h1>
              <p
                aria-label="description"
                className="text-base font-medium text-white"
              >
                5 years ago, we opened our doors to help students gain admission
                to the college of their dreams. Over that time, we have shaped
                the way people get into college so they can learn and grow from
                the experience.
              </p>
            </div>

            <div
              aria-label="column-right"
              className="flex-shrink-0 flex-grow-0 basis-auto"
            >
              <Image
                src="https://res.cloudinary.com/dromjx3rx/image/upload/v1737911763/about-us-hero_tr2fa9.svg"
                alt="Arabic Juniors about us hero"
                width={268}
                height={280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="our-dream-area" className="bg-white py-20">
        <div className="container">
          <div
            aria-label="our-dream-wrapper"
            className="bg-yellow-500 flex items-center gap-x-10 justify-between overflow-hidden rounded-3xl"
          >
            <div aria-label="column-left" className="max-w-[400px] self-end">
              <Image
                src="https://res.cloudinary.com/dromjx3rx/image/upload/v1737914364/our-mission_1_vlm1zx.png"
                alt="our mission"
                width={1132}
                height={952}
                priority
                className="transform scale-x-[-1] -translate-x-3"
              />
            </div>

            <div
              aria-label="column-right"
              className="bg-[#FFDA89] px-8 py-10 rounded-2xl flex-1 m-10 ml-0 max-w-[39rem]"
            >
              <div
                aria-label="title-wrapper"
                className="flex items-center gap-x-5 mb-8"
              >
                <span
                  aria-label="icon-wrapper"
                  className="flex items-center text-[2.5rem] text-neutral-800 flex-shrink-0 flex-grow-0 basis-auto"
                >
                  <IconMission />
                </span>
                <h3
                  aria-label="title"
                  className="text-3xl font-bold text-neutral-800"
                >
                  Our Mission
                </h3>
              </div>

              <p
                aria-label="mission-description"
                className="text-neutral-800 font-normal text-xl"
              >
                To design and provide digital educational programs and curricula
                inspired by Islamic values, fostering and guiding students from
                primary to high school. Our goal is to integrate modern
                educational strategies and innovative technologies while staying
                true to the teachings and principles of Islam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OurValues />
    </React.Fragment>
  );
};

export default AboutUsPage;
