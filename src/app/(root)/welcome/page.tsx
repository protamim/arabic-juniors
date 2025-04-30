import React from "react";
import WhyJoinUs from "./components/WhyJoinUs";
import { FaqSection, StudentReviews } from "@/components/homepage";
import { FaqTypes } from "@/types";

const FAQ_DATA: FaqTypes[] = [
  {
    key: "first-faq",
    question: "Do you follow the UAE school curriculum?",
    answer: `Yes, we align our lessons with the UAE Ministry of Education standards to support students' school performance.`,
  },
  {
    key: "second-faq",
    question: "Are these classes for native or non-native Arabic speakers?",
    answer: `We offer tailored programs for both native and non-native Arabic speakers.`,
  },
  {
    key: "third-faq",
    question: "Are the sessions one-on-one or group-based?",
    answer: `We provide both one-on-one and small group sessions to suit your child’s learning style.`,
  },
  {
    key: "fourth-faq",
    question: "What is the class schedule and duration?",
    answer: `Flexible scheduling is available, with sessions lasting 60 minutes, up to 5 times a week.`,
  },
  {
    key: "fifth-faq",
    question: "Do you offer a free trial?",
    answer: `Yes! You can book a free trial session to experience our teaching approach before enrolling.`,
  },
  {
    key: "sixth-faq",
    question: "How do I enroll my child?",
    answer: `Simply fill out our online registration form, and we’ll contact you to get started.`,
  },
  {
    key: "seventh-faq",
    question: "Who can join these Arabic classes?",
    answer: `Our Arabic tuition is open to all students in UAE schools, from Grade 1 to Grade 10, across MOE, British, American, and IB curricula`,
  },
];

const WelcomePage = () => {
  return (
    <React.Fragment>
      <section
        aria-label="welcome-hero"
        className="relative z-[1] before:absolute before:h-full before:w-full before:bg-gradient-to-r before:from-pink-500 before:from-5% before:via-orange-500 before:via-50% before:to-yellow-500 before:to-100% before:-z-[1]"
      >
        <div className="container">
          <div
            aria-label="welcome-hero-wrapper"
            className="py-6 sm:py-12 xl:py-20"
          >
            <h1 className="text-3xl font-bold text-white text-center mb-4 sm:mb-6 sm:text-5xl">
              WELCOME!
            </h1>
            <p className="text-lg font-bold text-white text-center mb-3 max-w-screen-lg mx-auto sm:mb-6 sm:text-3xl sm:leading-tight">
              You've taken the first step towards a beautiful journey. Begin
              exploring now!
            </p>
            <p className="text-sm font-normal text-white text-center max-w-screen-md mx-auto sm:text-2xl sm:leading-tight">
              May Allah fill your path with endless blessings, grant you deep
              understanding, and make the Qur’an a light in your life. Ameen! 🌟
            </p>
          </div>
        </div>
      </section>

      <WhyJoinUs />
      <StudentReviews />
      <FaqSection faqData={FAQ_DATA} />
    </React.Fragment>
  );
};

export default WelcomePage;
