'use client';
import React from "react";
import MultiStepRegistrationForm from "./MultiStepRegistrationForm";
import { StepsProvider } from "react-step-builder";

const UserRegistrationPage = () => {
  return (
    <React.Fragment>
      <section
        aria-label="registration-page"
        className="min-h-96 relative mb-12 z-[1] before:absolute before:h-96 before:w-full before:bg-gradient-to-r before:from-pink-500 before:from-5% before:via-orange-500 before:via-50% before:to-yellow-500 before:to-100% before:-z-[1]"
      >
        <div className="container pt-20">
          <div
            aria-label="registration-wrapper"
            className="bg-white rounded-2xl p-11 flex items-center justify-center flex-col"
          >
            <h1 className="text-neutral-800 font-bold text-5xl text-center mb-8">
              Let's begin your journey together
            </h1>

            <div
              aria-label="registration-form-wrapper"
              className="max-w-screen-md py-14 px-12 bg-[#FAF8F8] rounded-2xl"
            >
              <StepsProvider>
                <MultiStepRegistrationForm />
              </StepsProvider>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserRegistrationPage;
