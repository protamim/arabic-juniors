import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { WhatsAppIcon } from "./svgIcons";

const HeaderActionButton = () => {
  return (
    <React.Fragment>
      <Button asChild aria-label="header-action-button">
        <Link href={"tel:+971 50 992 1470"}>
          <WhatsAppIcon className="text-sm md:text-base lg:text-xl text-white" />
           +971 50 992 1470
        </Link>
      </Button>
    </React.Fragment>
  );
};

export default HeaderActionButton;
