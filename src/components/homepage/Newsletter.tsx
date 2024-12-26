import { NewsletterImage } from "@/assets";
import Image from "next/image";
import React from "react";
import { NewsletterForm } from "./NewsletterForm";
import { NewsletterBgVectorIcon, UnionShapeBgIcon } from "./svgIcons";

const Newsletter = () => {
  return (
    <React.Fragment>
      <section aria-label="newsletter-home" className="py-16">
        <div className="container">
          <div
            aria-label="newsletter-wrapper"
            className="py-20 px-28 w-full bg-[#FFA3CC] rounded-3xl flex items-center justify-between gap-x-20 relative overflow-hidden z-10"
          >
            <div aria-label="newsletter-column-left">
              <div
                aria-label="newsletter-imager-wrapper"
                className="max-w-[21rem]"
              >
                <Image
                  src={NewsletterImage}
                  alt="newsletter image"
                  width={674}
                  height={539}
                  priority
                />
              </div>
            </div>

            <div aria-label="newsletter-column-right">
              <div className="max-w-96">
                <h3 className="text-neutral-900 text-5xl font-bold text-center mb-4">
                  Sign up for the{" "}
                </h3>
                <p className="text-3xl font-bold text-neutral-900 text-center mb-6">
                  First rejection
                </p>

                <div
                  aria-label="newsletter-form-wrapper"
                  className="max-w-60 mx-auto"
                >
                  <NewsletterForm />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <span className="text-[196px] text-pink-200 absolute bottom-0 left-[34%] -z-10">
              <UnionShapeBgIcon />
            </span>
            <span className="absolute top-0 right-0 text-[203px] text-pink-500 -z-10">
                <NewsletterBgVectorIcon />
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Newsletter;
