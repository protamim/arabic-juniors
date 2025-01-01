import Link from "next/link";
import React from "react";

const HeaderNavItem: React.FC<React.HTMLAttributes<HTMLLinkElement>> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <Link
        aria-label="header-nav-item"
        href="#"
        className="text-neutral-600 text-base font-semibold transition-all ease-in-out duration-300 hover:text-orange-500"
      >
        {children}
      </Link>
    </React.Fragment>
  );
};

export default HeaderNavItem;
