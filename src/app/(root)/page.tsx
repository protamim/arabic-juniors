import {
  ArabicCurriculumn,
  BlogSection,
  DeliverResult,
  FaqSection,
  HomeHero,
  StudentReviews,
  StudentStrugglingBanner,
  TeachersSlider,
} from "@/components/homepage";
import { FaqTypes } from "@/types";
import React from "react";

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

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <ArabicCurriculumn />
      <StudentStrugglingBanner />
      <TeachersSlider />
      <DeliverResult />
      <BlogSection />
      <StudentReviews />
      <FaqSection faqData={FAQ_DATA} />
    </React.Fragment>
  );
};

export default HomePage;
