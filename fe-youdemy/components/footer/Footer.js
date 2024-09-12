import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
const MENU_LIST_1 = [
  { text: "About Page", href: "/about" },
  { text: "Contact Us", href: "/contact" },
  { text: "About Us", href: "/about-us" },
  { text: "Term of Use", href: "/term-of-use" },
];
const MENU_LIST_2 = [
  { text: "Become a Creator", href: "/become-a-creator" },
  { text: "Headquater", href: "/" },
  { text: "Partnerships", href: "/" },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__button-container">
        {MENU_LIST_1.map((menu, idx) => (
          <Link href={menu.href}>
            <div className="footer__button">{menu.text}</div>
          </Link>
        ))}
      </div>
      <div className="footer__button-container">
        {MENU_LIST_2.map((menu, idx) => (
          <Link href={menu.href}>
            <div className="footer__button">{menu.text}</div>
          </Link>
        ))}
      </div>
      <div className="footer__logo-container">
        <img src="YD.svg" width={280} height={204} />
      </div>
    </div>
  );
};

export default Footer;
