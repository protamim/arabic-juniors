import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderActionButton from "./HeaderActionButton";
import { cn } from "@/lib/utils";

const LgScreenHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <React.Fragment>
      <div
        aria-label="header-for-larger-screen"
        className={cn("flex items-center gap-x-5 md:justify-end lg:justify-between flex-1", className)}
        {...props}
      >
        <HeaderNav className="flex-row gap-x-5 lg:mx-auto"/>
        <HeaderActionButton />
      </div>
    </React.Fragment>
  );
};

export default LgScreenHeader;
