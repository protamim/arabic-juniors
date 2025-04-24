import React from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

const ContactUsPage = () => {
  return (
    <React.Fragment>
      <section
        aria-label="contact-us-page"
        className="relative z-[1] before:absolute before:h-56 before:sm:h-96 before:w-full before:bg-gradient-to-r before:from-pink-500 before:from-5% before:via-orange-500 before:via-50% before:to-yellow-500 before:to-100% before:-z-[1]"
      >
        <div className="container pt-10 sm:pt-12 md:pt-20">
          <div
            aria-label="contact-us-wrapper"
            className="p-5 sm:p-10 md:p-12 rounded-xl bg-white"
          >
            <h1
              aria-label="title"
              className="text-3xl font-bold text-neutral-800 text-center mb-4 sm:text-4xl md:text-5xl lg:mb-5"
            >
              Get In Touch
            </h1>
            <p
              aria-label="short-description"
              className="text-neutral-700 font-normal text-sm text-center mb-8 max-w-[477px] mx-auto sm:text-lg lg:mb-14"
            >
              We would love to hear from you Feel free to reach out using the
              below details.
            </p>

            <div
              aria-label="wrapper-main"
              className="w-full flex flex-col lg:flex-row gap-x-10 lg:items-center lg:justify-between"
            >
              <div
                aria-label="form-wrapper-main"
                className="bg-[#FAF8F8] w-full p-5 rounded-2xl mb-9 max-w-screen-sm lg:mb-0 lg:order-2 xl:py-10 xl:px-16"
              >
                <ContactForm />
              </div>

              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUsPage;
