import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <AppBar sx={{ background: "#2BA7DC" }}>
        <Toolbar>
          <nav className={`nav`}>
            <Link href={"/"}>
              <a>
                <h1 className="logo">
                  <img src="YD1.svg" width={80} height={100} />
                </h1>
              </a>
            </Link>
            <div
              onClick={() => setNavActive(!navActive)}
              className={`nav__menu-bar`}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))}
            </div>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Navbar;
