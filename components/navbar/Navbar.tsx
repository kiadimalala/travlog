"use client";

import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/images/index";

import { circular } from "@/fonts/index";

import "./navbar.css";
import Link from "next/link";

import { Button } from "@/components";

import { FiMenu, FiX } from "react-icons/fi";

const Menu = () => {
  return (
    <>
      <p>
        <Link href={"#home"}>Home</Link>
      </p>
      <p>
        <Link href={"#wgpt3"}>Discover</Link>
      </p>
      <p>
        <Link href={"#possibility"}>Special Deals</Link>
      </p>
      <p>
        <Link href={"#features"}>Contact</Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className={` ${circular.className} travlog__navbar `}>
      <div className="travlog__navbar-logo">
        <Image src={logo} alt="logo" />
      </div>
      <div className="travlog__navbar-links_container">
        <Menu />
      </div>
      <div className="travlog__navbar-sign">
        <p>Sign in</p>
        <Button className="btn-sign" label="Sign up" />
      </div>
      <div className="travlog__navbar-menu">
        {!toggleMenu ? (
          <Button className="btn-menu" onClick={() => setToggleMenu(true)}>
            <FiMenu />
          </Button>
        ) : (
          <Button className="btn-menu" onClick={() => setToggleMenu(false)}>
            <FiX />
          </Button>
        )}
        {toggleMenu && (
          <div className={`travlog__navbar-menu_container scale-in-tr `}>
            <div className="travlog__navbar-menu_container-links">
              <Menu />
              <div className="travlog__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <Button className="btn-sign" label="Sign up" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
