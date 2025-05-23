import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <React.Fragment>
      <Link
        href="/"
        aria-label="juniors-logo-header"
        className="max-w-20 md:max-w-max"
      >
        <Image
          src={'/arabic-logo-new.png'}
          alt="arabic juniors logo"
          width={137}
          height={53}
          priority
        />
      </Link>
    </React.Fragment>
  );
};

export default HeaderLogo;
