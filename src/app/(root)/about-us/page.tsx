import React from "react";
import OurValues from "./components/OurValues";
import OurMission from "./components/OurMission";
import AboutHero from "./components/AboutHero";
import OurTeacher from "./components/OurTeacher";
import { FaqSection } from "@/components/homepage";
import { FaqTypes } from "@/types";

const FAQ_DATA: FaqTypes[] = [
  {
    key: "first-faq",
    question: "What makes Arabic Juniors Academy different?",
    answer: `We focus only on teaching Arabic to school-aged children, using fun, interactive methods that match the UAE school curriculum. Our classes are personalized, live, and designed to help students succeed in Arabic at school and beyond.`,
  },
  {
    key: "second-faq",
    question: "How much experience does your team have?",
    answer: `Our teachers are qualified Arabic educators with strong knowledge of the UAE education system. Many have years of experience teaching children both online and in schools across the UAE.`,
  },
  {
    key: "third-faq",
    question: "Where are you located and do you serve all Emirates?",
    answer: `Arabic Juniors Academy is an online platform, so students from all Emirates—including Dubai, Abu Dhabi, Sharjah, and beyond—can join from home. All you need is a device and internet connection.`,
  },
];

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <AboutHero />
      <OurMission />
      <OurValues />
      <OurTeacher />
      <FaqSection faqData={FAQ_DATA} />
    </React.Fragment>
  );
};

export default AboutUsPage;
