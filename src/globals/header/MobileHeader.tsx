import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderActionButton from "./HeaderActionButton";
import { cn } from "@/lib/utils";

const MobileHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <React.Fragment>
      <div
        aria-label="header-for-mobile"
        className={cn(
          "fixed left-0 top-[var(--juniors-header-height)] right-0 bottom-0 w-full z-50 flex items-start flex-col gap-y-8 bg-white py-6 px-4 border-t border-gray-300 transition-all ease-in duration-300 lg:hidden",
          className
        )}
        {...props}
      >
        <HeaderNav />
        <HeaderActionButton />
      </div>
    </React.Fragment>
  );
};

export default MobileHeader;
