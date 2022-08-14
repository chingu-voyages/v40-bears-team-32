import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// import Logo from "./Logo";
const MENU_LIST_1 = [
  { text: "About Page", href: "/" },
  { text: "Contact Us", href: "/contact-us" },
  { text: "About Us", href: "/about-us" },
  { text: "Term of Use", href: "/term-of-use" },
  { text: "Become a Creator", href: "/become-a-creator" },
];
const MENU_LIST_2 = [
  { text: "Headquater", href: "/" },
  { text: "Partnerships", href: "/" },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__inner-container">
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
        <div>
          <img src="YD1.svg" width={280} height={204} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
