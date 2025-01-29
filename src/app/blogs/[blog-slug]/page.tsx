"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BlogDetailsPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <section
        aria-label="blog-details"
        className="relative z-[1] before:absolute before:w-full before:h-72 before:bg-gradient-to-r before:from-[#FF60A8] before:from-5% before:via-[#FB6238] before:via-50% before:to-[#F5AE14] before:to-100% before:-z-[1]"
      >
        <div className="container">
          <div aria-label="blog-details-wrapper" className="pt-10">
            <div
              onClick={() => router.back()}
              aria-label="back-to-prev"
              className="flex items-center gap-x-2 text-yellow-400 text-lg font-medium hover:text-yellow-300 hover:cursor-pointer"
            >
              <ArrowLeft />
              <p>Back to Blog</p>
            </div>

            <h2
              aria-label="blog-title"
              className="mt-4 mb-7 text-4xl font-bold text-white"
            >
              Learning with Games? Why n....
            </h2>

            <div
              aria-label="blog-feature-image-wrapper"
              className="flex w-full mb-8"
            >
              <Image
                src="https://res.cloudinary.com/dromjx3rx/image/upload/v1738161018/450d30a2e71ff211efe7fc2ef693cd22_txmlzk.png"
                alt="blog feature image"
                width={1320}
                height={920}
                priority
                className="rounded-3xl aspect-video w-full object-cover object-top"
              />
            </div>

            {BLOG_CONTENT.map((content) => (
              <div
                key={content.key}
                aria-label="blog-content-section"
                className="mb-5 w-full"
              >
                <h3
                  aria-label="content-title"
                  className="text-neutral-800 text-2xl font-semibold mb-4"
                >
                  {content.title}
                </h3>

                {content.paragraph
                  .trim()
                  .split("\n")
                  .map((sentence, index) => (
                    <p
                      key={index}
                      aria-label="content-paragraph"
                      className="text-neutral-600 text-lg font-normal mb-3 last:mb-0"
                    >
                      {sentence}
                    </p>
                  ))}
              </div>
            ))}

            <div aria-label="latest-blog-area" className="mt-16">
              <h4 aria-label="title" className="text-neutral-800 text-4xl font-bold mb-7">Latest Blog</h4>
              <p>blog card goes here...</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BlogDetailsPage;

const BLOG_CONTENT = [
  {
    key: "A-Different-Approach-You",
    title: "A Different Approach: You vs. You",
    paragraph: `So, we tried something different. What if we compared students to their most similar counterparts—themselves? We tracked the same group of students over two school years to see how their performance changed from year to year depending on how their use of Learneer changed from year to year.`,
  },
  {
    key: "the-results-speak-for-themselves",
    title: "The results speak for themselves",
    paragraph: `The findings were encouraging. Kodi Weatherholtz, principal research scientist at Learneer, found that Students who amped up their Learneer usage from one year to the next saw notable improvements in their gains on the MAP Growth test. It was a consistent trend across different grades and demographic groups. Because of the study design (within-subjects comparison), these gains can’t be easily attributed to other student`,
  },
  {
    key: "digging-deeper",
    title: "Digging deeper",
    paragraph: `For those who like the nitty-gritty details, we used a measure called the Conditional Growth Index (CGI) to track student growth. This measure takes into account various factors like starting scores and grade levels, making it a \nreliable indicator of genuine learning progress. This measure also allows us to compare student growth across grades on a standard deviation scale. The data showed that even a small increase in Learneer usage could lead to a meaningful bump in CGI`,
  },
  {
    key: "what-about-teachers",
    title: "What about teachers?",
    paragraph: `It’s true that a student in the 2022 school year may have had a better teacher than they had in the 2021 school year. Could the improvement be due to that? This is possible, but there are two reasons why we are confident that’s not the case here. First, in public schools the students rarely choose their teachers. So, if someone got a better or worse teacher in one year compared to the teacher they got the other year, that’s largely due to chance. And given that we are looking at 100K students, about half of whom increased their usage year to year, it’s unlikely that all those students got better teachers in year two. \nSecond, to rule out the teacher effect in our analysis, we account for the average time students of any given teacher spend on Khan as well as the average scores the students of any given teacher see on their tests. That means we are looking at the effect of change in usage on change in MAP gains for all types of teachers, and we average the effect. And after all that, the effect stil holds.`,
  },
  {
    key: "what-does-this-mean-for-you",
    title: "What does this mean for you?",
    paragraph: `Simply put, the more you use Learneer, the more you’re likely to learn. We often say spend at least 30 minutes per week on Learneer. But what this study means is that if you spend five minutes per week now, spending just a bit more time—say 10 minutes per week—will benefit you. Whether you’re a student, parent, or educator, this is great news. It means that the time invested in Learneer is time well spent, leading to real and measurable learning gains.`,
  },
  {
    key: "conclusion",
    title: "conclusion",
    paragraph: `Our latest study builds on previous findings, showing that Learneer is a reliable tool for enhancing learning outcomes even in the challenging context of a pandemic. While no study is perfect, the evidence strongly suggests that Learneer can play a significant role in boosting academic achievement.`,
  },
];
