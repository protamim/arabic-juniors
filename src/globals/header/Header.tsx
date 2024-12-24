import { SiteLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhatsAppIcon } from "./svgIcons";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav
            aria-label="header-nav-wrapper"
            className="flex items-center gap-x-6 justify-between h-24 py-2"
          >
            <Link href="/" aria-label="juniors-logo-header" className="max-w-20 md:max-w-max">
              <Image
                src={SiteLogo}
                alt="arabic juniors logo"
                width={137}
                height={53}
                priority
              />
            </Link>

            <ul
              aria-label="header-nav-list"
              className="hidden md:flex items-center gap-x-11"
            >
              <li aria-label="header-nav-item">
                <Link
                  href="#"
                  className="text-neutral-600 text-base font-semibold transition-all ease-in-out duration-300 hover:text-orange-500"
                >
                  Pricing
                </Link>
              </li>

              <li aria-label="header-nav-item">
                <Link
                  href="#"
                  className="text-neutral-600 text-base font-semibold transition-all ease-in-out duration-300 hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>

              <li aria-label="header-nav-item">
                <Link
                  href="#"
                  className="text-neutral-600 text-base font-semibold transition-all ease-in-out duration-300 hover:text-orange-500"
                >
                  Blog
                </Link>
              </li>

              <li aria-label="header-nav-item">
                <Link
                  href="#"
                  className="text-neutral-600 text-base font-semibold transition-all ease-in-out duration-300 hover:text-orange-500"
                >
                  Contact us
                </Link>
              </li>
            </ul>

            <div aria-label="header-action-button">
              <Button asChild>
                <Link href={"tel:+971 55 1234 206"}>
                  <WhatsAppIcon className="text-sm md:text-xl text-white" />
                  +971 55 1234 206
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
