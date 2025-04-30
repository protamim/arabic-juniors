import React from "react";
import TeacherCard from "./components/TeacherCard";
import { FaqTypes, TeachersTypes } from "@/types";
import { FaqSection } from "@/components/homepage";

const TEACHERS_DATA: TeachersTypes[] = [
  {
    key: "1",
    teacherName: "Danial Jack",
    profession: "Teacher",
    image: {
      link: "/teacher-1.png",
      width: 611,
      height: 408,
      alt: "Teacher Photo",
    },
    detail: {
      grade: "6-10",
      experience: "5+ Years exp.",
      education: "Teacher",
      subject: "Math",
      shortDescription:
        "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
    },
  },
  {
    key: "2",
    teacherName: "Danial Jack",
    profession: "Teacher",
    image: {
      link: "/teacher-2.jpg",
      width: 611,
      height: 408,
      alt: "Teacher Photo",
    },
    detail: {
      grade: "6-10",
      experience: "5+ Years exp.",
      education: "Teacher",
      subject: "Math",
      shortDescription:
        "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
    },
  },
  {
    key: "3",
    teacherName: "Danial Jack",
    profession: "Teacher",
    image: {
      link: "/teacher-3.jpg",
      width: 611,
      height: 408,
      alt: "Teacher Photo",
    },
    detail: {
      grade: "6-10",
      experience: "5+ Years exp.",
      education: "Teacher",
      subject: "Math",
      shortDescription:
        "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
    },
  },
  {
    key: "4",
    teacherName: "Danial Jack",
    profession: "Teacher",
    image: {
      link: "/teacher-1.png",
      width: 611,
      height: 408,
      alt: "Teacher Photo",
    },
    detail: {
      grade: "6-10",
      experience: "5+ Years exp.",
      education: "Teacher",
      subject: "Math",
      shortDescription:
        "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
    },
  },
  {
    key: "5",
    teacherName: "Danial Jack",
    profession: "Teacher",
    image: {
      link: "/teacher-2.jpg",
      width: 611,
      height: 408,
      alt: "Teacher Photo",
    },
    detail: {
      grade: "6-10",
      experience: "5+ Years exp.",
      education: "Teacher",
      subject: "Math",
      shortDescription:
        "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
    },
  },
  {
    key: "6",
    teacherName: "Danial Jack",
    profession: "Teacher",
    image: {
      link: "/teacher-3.jpg",
      width: 611,
      height: 408,
      alt: "Teacher Photo",
    },
    detail: {
      grade: "6-10",
      experience: "5+ Years exp.",
      education: "Teacher",
      subject: "Math",
      shortDescription:
        "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
    },
  },
];

const FAQ_DATA: FaqTypes[] = [
  {
    key: "first-faq",
    question: "How can I apply to become a teacher at Arabic Juniors Academy?",
    answer: `You can fill out the “Apply Now” form on our Careers Page and fill the form. Our team will review your profile and get in touch with you if you’re shortlisted`,
  },
  {
    key: "second-faq",
    question: "What qualifications do I need to teach with your academy?",
    answer: `You need a bachelor’s degree in Arabic, good knowledge of the UAE school curriculum, and the ability to teach and manage children well.`,
  },
  {
    key: "third-faq",
    question: "Is teaching experience necessary?",
    answer: `Yes, a minimum of 2 years teaching experience in the UAE school Arabic syllabus is required.`,
  },
  {
    key: "fourth-faq",
    question: " What are the working hours and schedule flexibility?",
    answer: `You can set your own hours. Evening and weekend availability is preferred.`,
  },
  {
    key: "fifth-faq",
    question: "How are lessons conducted?",
    answer: `Lessons are live via MS Teams, Zoom or Google Meet using engaging materials.`,
  },
];

const TeachersPage = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="teacher-page-hero"
        className="py-24 bg-gradient-to-r from-[-5%] from-[#FF60A8] via-50% via-[#FB6238] to-100% to-[#F5AE14]"
      >
        <div className="container">
          <div
            aria-describedby="content-wrapper"
            className="flex items-center justify-center flex-col gap-y-6"
          >
            <h1 className="text-4xl leading-snug md:text-5xl font-bold text-white text-center">
              Meet the Expert Teachers
            </h1>
            <p className="text-lg md:text-2xl font-normal text-white text-center">
              Vast Teaching & Tutoring Experience
            </p>
          </div>
        </div>
      </section>

      <section
        aria-describedby="all-teachers-section"
        className="bg-[#F3F7F4] py-20"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="title-wrapper"
              className="mb-12 flex items-center justify-center"
            >
              <h3 className=" text-neutral-800 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl lg:font-bold">
                Meet our dynamic team or tutors
              </h3>
            </div>

            <div
              aria-describedby="teacher-card-wrapper"
              className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <TeacherCard teachersData={TEACHERS_DATA} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqData={FAQ_DATA} />
    </React.Fragment>
  );
};

export default TeachersPage;
