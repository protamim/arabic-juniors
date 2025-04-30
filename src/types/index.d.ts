export interface ImageType {
  link: string;
  width: number;
  height: number;
  alt: string;
}
export interface GuardianReviewsCardType {
  id: string;
  image: ImageType;
  authorName: string;
  profession: string;
  rating: number;
  comment: string;
}

// faq
export interface FaqTypes {
  key: string;
  question: string;
  answer: string;
}

// teachers

// {
//   key: "jack",
//   teacherName: "Danial Jack",
//   profession: "Teacher",
//   image: {
//     link: "/teacher-1.png",
//     width: 611,
//     height: 408,
//     alt: "Teacher Photo",
//   },
//   detail: {
//     grade: "6-10",
//     experience: "5+ Years exp.",
//     education: "Teacher",
//     subject: "Math",
//     shortDescription:
//       "Naina is an Engineer by profession & passionate about teaching. She has 5+ years experience is teaching IB, IGCSE, CBSE & ICSE Math. She understands the conceptual as well as application based problems faced by students and helps build a strong foundation to instill confidence.",
//   },
// },

export interface TeacherDetailTypes {
  grade: string;
  experience: string;
  education: string;
  subject: string;
  shortDescription: string;
}
export interface TeachersTypes {
  key: string;
  teacherName: string;
  profession: string;
  image: ImageType;
  detail: TeacherDetailTypes;
}
