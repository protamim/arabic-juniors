"use client";
import React from "react";
import HeaderLogo from "./HeaderLogo";
import { Menu, X } from "lucide-react";
import MobileHeader from "./MobileHeader";
import LgScreenHeader from "./LgScreenHeader";

const Header = () => {
  const [isMenuOpen, setIsMenu] = React.useState(false);

  const handleHeaderNav = () => {
    setIsMenu((prev) => (prev ? false : true));
  };

  return (
    <React.Fragment>
      <style aria-label="react-style-component">
        {isMenuOpen ? `body {overflow: hidden}` : `body {overflow: auto}`}
      </style>

      <header>
        <div className="container">
          <nav
            aria-label="header-nav-wrapper"
            className="flex items-center gap-x-6 justify-between h-16 md:h-24 py-2 relative"
          >
            <HeaderLogo />

            {isMenuOpen ? (
              <X aria-label="icon-close"
                onClick={handleHeaderNav}
                className="cursor-pointer md:hidden"
              />
            ) : (
              <Menu aria-label="icon-humberger-menu"
                onClick={handleHeaderNav}
                className="cursor-pointer md:hidden"
              />
            )}

            <MobileHeader
              className={
                isMenuOpen
                  ? "h-full opacity-100 visible"
                  : "invisible h-0 opacity-0"
              }
            />

            <LgScreenHeader className="hidden md:flex" />
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
