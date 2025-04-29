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
    question: "What is the tutor curriculum?",
    answer: `A tutor curriculum is a structured plan with lessons, methods, and goals tailored to a student's needs. It includes assessments, topics, teaching strategies, feedback, and customization for effective learning.`,
  },
  {
    key: "second-faq",
    question: "Do you have female educators for female students?",
    answer: `Yes, many platforms provide female educators for female students, ensuring comfort, cultural alignment, and personalized learning. Check with the specific institution or tutoring service for availability.`,
  },
  {
    key: "third-faq",
    question: "How do you keep children safe?",
    answer: `Child safety is ensured through background checks for educators, secure online platforms, parental monitoring features, safe physical environments, and adherence to child protection policies and guidelines.`,
  },
  {
    key: "fourth-faq",
    question: "Do you have special teachers for female students?",
    answer: `Yes, many institutions offer special female teachers for female students to ensure comfort, cultural alignment, and a supportive learning environment. Availability depends on the specific institution or platform.`,
  },
  {
    key: "fifth-faq",
    question: "Do you offer courses for adults?",
    answer: `Yes, many platforms offer courses for adults, covering a wide range of subjects such as professional development, personal growth, language learning, and technical skills. Availability depends on the platform or institution.`,
  },
  {
    key: "sixth-faq",
    question: "Could you elucidate the fee structure?",
    answer: `The fee structure typically includes per-course fees, subscription models, tiered pricing, or payment plans. Discounts may be available for early registration or bundles, varying by platform or institution.`,
  },
  {
    key: "seventh-faq",
    question: "How many classes shall there per month?",
    answer: `The number of classes per month varies depending on the course or program. Typically, it can range from 4 to 12 classes per month, depending on the course frequency (weekly or bi-weekly).`,
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
