import {
  PriceOnly,
  StudentStruggling,
  StudentStrugglingVectorDot,
} from "@/assets";
import Image from "next/image";
import React from "react";

const StudentStrugglingBanner = () => {
  return (
    <React.Fragment>
      <section aria-label="student-struggling-banner-section" className="py-14">
        <div className="container">
          <div
            aria-label="student-struggling-banner-wrapper"
            className="bg-yellow-500 pt-8 pb-3 rounded-2xl relative z-10 overflow-hidden"
          >
            <div
              aria-label="banner-content"
              className="max-w-[43.375rem] ml-auto mr-40"
            >
              <h3 className="text-neutral-950 text-5xl font-extrabold  leading-tight mb-14">
                Is Your Child{" "}
                <span className="text-orange-500">Struggling</span> with{" "}
                <span className="text-pink-500">Arabic Studies</span> in{" "}
                <span className="text-white"> School?</span>
              </h3>

              <div className="max-w-[25.25rem] mx-auto">
                <h4 className="text-4xl font-extrabold text-neutral-900 leading-tight">
                  Affordable for all Price
                </h4>
                <h6 className="text-5xl max-w-max ml-auto font-extrabold text-white">
                  {" "}
                  Starting Just
                </h6>
              </div>
            </div>

            {/* floating elements */}
            <span
              aria-label="price-only"
              className="absolute right-0 bottom-0 -z-10 max-w-64"
            >
              <Image
                src={PriceOnly}
                alt="price only"
                width={529}
                height={331}
                priority
              />
            </span>

            <span
              aria-label="student-struggling-vector-dot"
              className="absolute right-0 bottom-0 -z-[11] max-w-64"
            >
              <Image
                src={StudentStrugglingVectorDot}
                alt="student struggling vector"
                width={175}
                height={194}
                priority
              />
            </span>

            <span
              aria-label="student-struggling"
              className="absolute left-0 bottom-0 -z-[11] max-w-[23.562rem]"
            >
              <Image
                src={StudentStruggling}
                alt="struggling students"
                width={730}
                height={630}
                priority
              />
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StudentStrugglingBanner;
