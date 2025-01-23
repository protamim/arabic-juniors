import { ReviewAuthorImage } from "@/assets";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const StudentReviews = () => {
  return (
    <React.Fragment>
      <section aria-label="student-reviews-home" className="pt-12 pb-14">
        <div className="container">
          <div>
            <div
              aria-label="reviews-top-home"
              className="max-w-[44.875rem] mx-auto mb-14"
            >
              <h3 className="text-4xl leading-tight sm:text-5xl sm:leading-tight font-bold text-neutral-800 mb-6 text-center">
                Our Happy <span className="text-orange-500">Students</span>
              </h3>
              <p className="text-sm sm:text-lg font-normal text-neutral-700 text-center">
                Thank you so much for your support and the great service you
                provide. We are very happy with our new website and we are
                receiving a lot of compliments!
              </p>
            </div>

            <div
              aria-label="student-reviews-card-wrapper"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4"
            >
              <ReviewsCard />
              <ReviewsCard />
              <ReviewsCard />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StudentReviews;

const ReviewsCard = () => {
  return (
    <React.Fragment>
      <div
        aria-label="reviews-card"
        className="p-5 rounded-2xl border border-neutral-100 max-w-max transition-all ease-in-out duration-300 hover:bg-[#F5F5F5]"
      >
        <div className="mb-5">
          <div
            aria-label="author-image-wrapper"
            className="w-20 h-20 flex items-center justify-center mb-5"
          >
            <Image
              src={ReviewAuthorImage}
              alt="review author"
              width={611}
              height={408}
              priority
              className="bg-[#CDE2F7] rounded-full h-full object-cover object-top"
            />
          </div>
          <h6
            aria-label="author-name"
            className="text-2xl font-medium text-neutral-900 mb-2"
          >
            Danial Jack
          </h6>
          <p
            aria-label="profession"
            className="text-xl font-normal text-neutral-300"
          >
            Teacher
          </p>
        </div>

        <div
          aria-label="student-revies-star-wrapper"
          className="flex items-center gap-x-3 mb-8"
        >
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500 fill-yellow-500" />
          <Star className="text-yellow-500 fill-yellow-500" />
        </div>

        <p
          aria-label="review-text"
          className="text-lg sm:text-xl font-normal text-neutral-900"
        >
          “I was looking for a perfect payment my freelance business. i’m using
          primary payment method and everyone who needs a solution.”
        </p>
      </div>
    </React.Fragment>
  );
};
