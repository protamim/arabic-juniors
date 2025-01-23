'use client';
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  FirstTeacherHome,
  FourthTeacherHome,
  SecondTeacherHome,
  ThirdTeacherHome,
} from "@/assets";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const TEACHERS_LIST = [
  {
    name: "Kristin Watson",
    profession: "Arabic Teacher",
    image: {
      link: FirstTeacherHome,
      width: 256,
      height: 256,
    },
  },
  {
    name: "Jenny Wilson",
    profession: "Arabic Teacher",
    image: {
      link: SecondTeacherHome,
      width: 256,
      height: 256,
    },
  },
  {
    name: "Jacob Jones",
    profession: "Arabic Teacher",
    image: {
      link: ThirdTeacherHome,
      width: 256,
      height: 256,
    },
  },
  {
    name: "Savannah Nguyen",
    profession: "Arabic Teacher",
    image: {
      link: FourthTeacherHome,
      width: 256,
      height: 256,
    },
  },
  {
    name: "Samara Youssef",
    profession: "Arabic Teacher",
    image: {
      link: FirstTeacherHome,
      width: 256,
      height: 256,
    },
  },
  {
    name: "Sarina Abdi",
    profession: "Arabic Teacher",
    image: {
      link: ThirdTeacherHome,
      width: 256,
      height: 256,
    },
  },
];

const TeachersSlider = () => {
  return (
    <React.Fragment>
      <section
        aria-label="teacher-slider-section-home"
        className="py-10 sm:py-16 bg-gradient-to-r from-[#FF60A8] from-5% via-[#FB6238] via-50% to-[#F5AE14] to-100%"
      >
        <div className="container">
          <div aria-label="teachers-slider-wrapper">
            <h3 className="text-white text-4xl leading-tight sm:text-6xl sm:leading-tight font-bold text-center mb-14">
              UAE Experienced Teachers
            </h3>

            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2000 })]}
              className="w-full max-w-[680px] mx-auto"
            >
              <CarouselContent>
                {TEACHERS_LIST?.map((teacher, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div
                        aria-label="teacher-image-wrapper"
                        className="max-w-32 mb-6"
                      >
                        <Image
                          src={teacher.image.link}
                          width={teacher.image.width}
                          height={teacher.image.height}
                          alt="first teacher home"
                          priority
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-white text-center mb-1">
                        {teacher.name}
                      </h4>
                      <p className="text-sm font-normal text-white/95 text-center">
                        {teacher.profession}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TeachersSlider;
