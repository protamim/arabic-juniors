import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { WhatsAppIcon } from "./svgIcons";

const HeaderActionButton = () => {
  return (
    <React.Fragment>
      <Button asChild aria-label="header-action-button">
        <Link href={"tel:+971 55 1234 206"}>
          <WhatsAppIcon className="text-sm md:text-base lg:text-xl text-white" />
          +971 55 1234 206
        </Link>
      </Button>
    </React.Fragment>
  );
};

export default HeaderActionButton;
