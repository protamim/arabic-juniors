import React from "react";
import CareersHero from "./components/CareersHero";
import EnvisionEmpower from "./components/EnvisionEmpower";
import Benefits from "./components/Benefits";
import LearnWay from "./components/LearnWay";
import OpenJobSection from "./components/OpenJobSection";
import { FaqSection } from "@/components/homepage";
import { FaqTypes } from "@/types";

const FAQ_DATA: FaqTypes[] = [
  {
    key: "1",
    question: "Who can apply to work as an Arabic teacher with you?",
    answer: `We welcome qualified Arabic teachers who are familiar with UAE school curricula (MOE and others), who have strong Arabic language skills, and experience in online teaching. Female candidates are preferred.`,
  },
  {
    key: "2",
    question: "Are the teaching positions full-time or part-time?",
    answer: `We offer flexible working options. You can choose to work either full-time or part-time based on your availability.`,
  },
  {
    key: "3",
    question: "What are the working hours and schedule like?",
    answer: `Our online teaching positions offer flexible schedules. You can choose the hours that work best for you, with classes scheduled based on the availability of students in different time zones, primarily aligned with UAE timings.`,
  },
  {
    key: "4",
    question: "Do you provide training for teachers?",
    answer: `Yes, we provide a short online orientation and curriculum training session for all new teachers to help them understand our systems and students’ needs.`,
  },
  {
    key: "5",
    question: "How can I apply to join your teaching team?",
    answer: `You can fill out the “Apply Now” form on our Careers Page and fill the form. Our team will review your profile and get in touch with you if you’re shortlisted`,
  },
];

const CareersPage = () => {
  return (
    <React.Fragment>
      <CareersHero />
      <EnvisionEmpower />
      <Benefits />
      <LearnWay />
      <OpenJobSection />
      <FaqSection faqData={FAQ_DATA} />
    </React.Fragment>
  );
};

export default CareersPage;
