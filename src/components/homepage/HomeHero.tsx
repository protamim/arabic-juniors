import {
  AlArabia,
  BoyWithFolderStanding,
  UaeLineVector,
  VectorDirectionRight,
  YoungBoyAttendingSchool,
} from "@/assets";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "./svgIcons";
import Link from "next/link";
import s from "../../assets/uae-line-vector.svg";

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
            className="max-w-[910px] mx-auto flex flex-col items-center justify-center relative"
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
              className="absolute -right-[20%] top-0"
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
              aria-label="al-arabia"
              className="absolute -right-[8%] top-[30%]"
            >
              <Image
                src={VectorDirectionRight}
                alt="vector direction right"
                width={124}
                height={69}
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
