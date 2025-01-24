import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HeaderNav: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <React.Fragment>
      <div
        aria-label="header-nav"
        className={cn("flex items-start flex-col gap-y-2", className)}
        {...props}
      >
        {NAV_ITEMS?.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              aria-label="header-nav-item"
              href={item.url}
              className="text-neutral-600 text-base font-semibold transition-all ease-in-out duration-300 hover:text-orange-500"
            >
              {item.label}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default HeaderNav;

interface NavItemsProps {
  url: string;
  label: string;
}

const NAV_ITEMS: NavItemsProps[] = [
  {
    url: "/pricing",
    label: "Pricing",
  },
  {
    url: "/about-us",
    label: "About Us",
  },
  {
    url: "/blog",
    label: "Blog",
  },
  {
    url: "/contact-us",
    label: "Contact us",
  },
];
