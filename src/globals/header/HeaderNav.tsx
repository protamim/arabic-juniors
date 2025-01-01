import React from "react";
import HeaderNavItem from "./HeaderNavItem";
import { cn } from "@/lib/utils";

const HeaderNav: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <React.Fragment>
      <div aria-label="header-nav" className={cn("flex items-start flex-col gap-y-2", className)} {...props}>
        <HeaderNavItem>Pricing</HeaderNavItem>
        <HeaderNavItem>About Us</HeaderNavItem>
        <HeaderNavItem>Blog</HeaderNavItem>
        <HeaderNavItem>Contact us</HeaderNavItem>
      </div>
    </React.Fragment>
  );
};

export default HeaderNav;
