import {
  Ahlaa,
  AlArabia,
  ArabicKhaap,
  BoyWithFolderStanding,
  LearningKidsRound,
  UaeLineVector,
  VectorDirectionLeft,
  VectorDirectionRight,
  YoungBoyAttendingSchool,
} from "@/assets";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "./svgIcons";
import Link from "next/link";

const HomeHero = () => {
  return (
    <React.Fragment>
      <section
        aria-label="home-hero-section"
        className="pt-10 pb-16 overflow-hidden"
      >
        <div className="container">
          <div
            aria-label="home-hero-wrapper"
            className="max-w-[910px] mx-auto flex flex-col items-center justify-center relative z-10"
          >
            <h1 className="text-7xl font-bold text-neutral-800 text-center flex items-center flex-wrap justify-center gap-x-5 mb-14">
              <span>Online</span>
              <Image
                src={BoyWithFolderStanding}
                width={196}
                height={194}
                priority
                alt="boy with folder standing"
                className="max-w-24"
              />
              <span className="text-orange-500">Arabic Tuition</span>{" "}
              <span>for</span>{" "}
              <span className="relative z-10">
                UAE
                <Image
                  src={UaeLineVector}
                  width={188}
                  height={44}
                  priority
                  alt="UAE students"
                  className="absolute -bottom-[30%] right-0 -z-10 min-w-[120%]"
                />
              </span>{" "}
              <span className="text-yellow-500">Students</span>{" "}
              <Image
                src={YoungBoyAttendingSchool}
                alt="boy with folder standing"
                width={248}
                height={205}
                priority
                className="max-w-32"
              />{" "}
            </h1>

            <p className="text-neutral-700 text-2xl font-normal max-w-screen-md mx-auto text-center mb-12">
              Discover thousands of fun and interactive learning activities to
              support your child’s growth and learning process.{" "}
            </p>

            <div
              aria-label="home-hero-button-wrapper"
              className="flex items-center gap-x-5"
            >
              <Button asChild>
                <Link href="#">
                  Get started
                  <ArrowRightIcon className="text-xl text-white" />
                </Link>
              </Button>

              <Button asChild variant={"secondary"}>
                <Link href="#">
                  Book Free sessions
                  <ArrowRightIcon className="text-xl text-white" />
                </Link>
              </Button>
            </div>

            {/* Floating elements */}
            <span
              aria-label="al-arabia"
              className="absolute -right-[20%] top-0 -z-10"
            >
              <Image
                src={AlArabia}
                alt="al arabia"
                width={169}
                height={113}
                priority
              />
            </span>
            <span
              aria-label="vector-dir-right"
              className="absolute -right-[8%] top-[30%] -z-10"
            >
              <Image
                src={VectorDirectionRight}
                alt="vector direction right"
                width={124}
                height={69}
                priority
              />
            </span>

            <span
              aria-label="learning-round-sign"
              className="absolute -right-[8%] bottom-0 -z-10"
            >
              <Image
                src={LearningKidsRound}
                alt="learning kids round sign"
                width={109}
                height={109}
                priority
              />
            </span>

            <span aria-label="arabic-letter-khaap" className="absolute -left-[5%] top-[32%] -z-10">
              <Image
                src={ArabicKhaap}
                alt="khaap letter of arabic"
                width={54}
                height={54}
                priority
              />
            </span>

            <span
              aria-label="vector-direction-left"
              className="absolute -left-[17%] top-[18%] -z-10"
            >
              <Image
                src={VectorDirectionLeft}
                alt="vector direction left"
                width={100}
                height={93}
                priority
              />
            </span>

            <span
              aria-label="arabic-lang"
              className="absolute -left-[18%] bottom-[5%] -z-10"
            >
              <Image
                src={Ahlaa}
                alt="arabic language"
                width={324}
                height={182}
                priority
              />
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomeHero;
