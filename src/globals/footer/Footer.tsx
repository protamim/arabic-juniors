import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  CallingIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  PinterestIcon,
  TelegramIcon,
  TikTokIcon,
  TwitterXIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "./SvgIcons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer aria-label="main-footer" className="pt-12 bg-[#F5F5F5]">
        <div className="container">
          <div
            aria-label="footer-wrapper"
            className="mb-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-5"
          >
            <div aria-label="site-details-column">
              <Link href="/" className="mb-3 flex">
                <Image
                  src={'/arabic-logo-new.png'}
                  width={138}
                  height={56}
                  alt="arabic juniors logo"
                  priority
                />
              </Link>
              <p className="text-neutral-700 font-normal text-base lg:mb-16">
                Learn Arabic online with expert UAE syllabus tutors, offering
                affordable one-to-one and group classes in conversational and
                Modern Standard Arabic.
              </p>

              <div
                aria-label="social-connect-wrapper"
                className="hidden lg:block"
              >
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  Connect with us
                </h4>

                <ul
                  aria-label="social-lists"
                  className="flex items-center gap-x-2"
                >
                  {SOCIAL_DATA?.map((social) => (
                    <li
                      key={social.key}
                      aria-label="social-item"
                      className="text-2xl"
                    >
                      <Link href={social.link}>{social.icon}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              aria-label="important-links-column"
              className="flex items-center justify-start flex-col"
            >
              <div
                aria-label="footer-links-wrapper"
                className="w-full lg:max-w-max"
              >
                <h4 className="text-neutral-800 text-3xl font-bold mb-6">
                  DISCOVER
                </h4>

                <ul
                  aria-label="footer-nav-list"
                  className="flex items-start flex-col gap-y-3"
                >
                  <li aria-label="footer-nav-item">
                    <Link
                      href="/about-us"
                      className="text-neutral-800 text-lg font-normal transition-all ease-in-out duration-300 hover:text-orange-500"
                    >
                      About
                    </Link>
                  </li>

                  <li aria-label="footer-nav-item">
                    <Link
                      href="/pricing"
                      className="text-neutral-800 text-lg font-normal transition-all ease-in-out duration-300 hover:text-orange-500"
                    >
                      Pricing
                    </Link>
                  </li>

                  <li aria-label="footer-nav-item">
                    <Link
                      href="/blogs"
                      className="text-neutral-800 text-lg font-normal transition-all ease-in-out duration-300 hover:text-orange-500"
                    >
                      Blog
                    </Link>
                  </li>

                  <li aria-label="footer-nav-item">
                    <Link
                      href="#"
                      className="text-neutral-800 text-lg font-normal transition-all ease-in-out duration-300 hover:text-orange-500"
                    >
                      Testimonial
                    </Link>
                  </li>

                  <li aria-label="footer-nav-item">
                    <Link
                      href="/careers"
                      className="text-neutral-800 text-lg font-normal transition-all ease-in-out duration-300 hover:text-orange-500"
                    >
                      Careers
                    </Link>
                  </li>

                  <li aria-label="footer-nav-item">
                    <Link
                      href="/faq"
                      className="text-neutral-800 text-lg font-normal transition-all ease-in-out duration-300 hover:text-orange-500"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div aria-label="help-center-column">
              {/* <Link
                href={"tel:+456 1544 5651"}
                aria-describedby="whatsapp-image"
                className="w-full flex justify-center items-center scale-95 transition-transform ease-in-out duration-300 hover:scale-105"
              >
                <Image
                  src={images.imgWhatsAppNumber}
                  width={4096}
                  height={1215}
                  alt="arabic juniors whatsapp number"
                  priority
                />
              </Link> */}

              <div
                aria-label="help-center-wrapper"
                className="bg-white rounded-2xl py-5 px-7"
              >
                <h5 className="text-3xl text-neutral-800 font-bold mb-7">
                  HELP CENTER
                </h5>

                <ul
                  aria-label="contact-lists"
                  className="flex flex-col gap-y-4"
                >
                  <li aria-label="contact-item">
                    <Link
                      href="tel:+456 1544 5651"
                      className="flex items-center gap-x-3 text-lg font-normal text-neutral-800 max-w-max transition-all ease-in-out duration-300 hover:opacity-75"
                    >
                      <CallingIcon className="text-orange-500 text-2xl" />
                      +456 1544 5651
                    </Link>
                  </li>

                  <li aria-label="contact-item">
                    <Link
                      href="mailto:hello@ArabicJuniors.com"
                      className="flex items-center gap-x-3 text-lg font-normal text-neutral-800 max-w-max transition-all ease-in-out duration-300 hover:opacity-75"
                    >
                      <EmailIcon className="text-orange-500 text-2xl" />
                      hello@ArabicJuniors.com
                    </Link>
                  </li>

                  <li aria-label="contact-item">
                    <Link
                      href="https://maps.app.goo.gl/hAwg2jjYZ3guPmau9"
                      className="flex items-center gap-x-3 text-lg font-normal text-neutral-800 max-w-max transition-all ease-in-out duration-300 hover:opacity-75"
                    >
                      <LocationIcon className="text-orange-500 text-2xl" />
                      Dubai - United Arab Emirates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* social link for mobile */}
          <div aria-label="social-connect-wrapper" className="lg:hidden mb-6">
            <h4 className="text-lg font-bold text-neutral-800 mb-4">
              Connect with us
            </h4>

            <ul aria-label="social-lists" className="flex items-center gap-x-2">
              {SOCIAL_DATA?.map((social) => (
                <li
                  key={social.key}
                  aria-label="social-item"
                  className="text-2xl"
                >
                  <Link href={social.link}>{social.icon}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            aria-label="footer-copyright"
            className="pt-4 pb-5 border-t border-t-neutral-200 flex items-center gap-x-4 sm:gap-x-7 justify-between"
          >
            <p className="text-neutral-700 text-xs sm:text-base font-normal">
              2024 ©All rights reserved.
            </p>

            <ul
              aria-label="agreement-links"
              className="flex items-center gap-x-4 sm:gap-x-10"
            >
              <li>
                <Link
                  href="#"
                  className="text-neutral-700 text-xs sm:text-base font-normal transition-colors ease-in-out duration-300 hover:text-orange-500"
                >
                  Terms of service
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-neutral-700 text-xs sm:text-base font-normal transition-colors ease-in-out duration-300 hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

const SOCIAL_DATA = [
  {
    key: "facebook",
    icon: <FacebookIcon className="text-[#1877F2]" />,
    link: "#",
  },
  {
    key: "linkedin",
    icon: <LinkedinIcon className="text-[#2867B2]" />,
    link: "#",
  },
  {
    key: "youtube",
    icon: <YouTubeIcon className="text-[#FF0000]" />,
    link: "#",
  },
  {
    key: "instagram",
    icon: <InstagramIcon className="text-[#F00073]" />,
    link: "#",
  },
  {
    key: "pinterest",
    icon: <PinterestIcon className="text-[#E60023]" />,
    link: "#",
  },
  {
    key: "whatsapp",
    icon: <WhatsAppIcon className="text-[#25D366]" />,
    link: "#",
  },
  {
    key: "telegram",
    icon: <TelegramIcon className="text-[#0088CC]" />,
    link: "#",
  },
  {
    key: "twitter-x",
    icon: <TwitterXIcon className="text-black" />,
    link: "#",
  },
  {
    key: "tiktok",
    icon: <TikTokIcon className="text-black" />,
    link: "#",
  },
];
