import React from "react";
import "./header.css";
import Image from "next/image";
import { Button } from "@/components";

import { HiBriefcase, HiPlay } from "react-icons/hi";

import { header, header_deco } from "@/images/index";
import { circular } from "@/fonts/index";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});
const Header = () => {
  return (
    <div className={` ${circular.className} travlog__header section__padding `}>
      <div className="travlog__header-content">
        <Button
          className={`btn-explore ${circular.className}`}
          label="Explore the world!"
        >
          <HiBriefcase />
        </Button>
        <h1>
          Travel <span>top destination</span> of the world
        </h1>
        <p className={inter.className}>
          We always make our customer happy by providing
          <br /> as many choices as possible
        </p>
        <div className="travlog__header-content_cta">
          <Button
            className={`btn-start ${circular.className}`}
            label="Get Started"
          />
          <Button
            className={`btn-view ${circular.className}`}
            label="Watch Demo"
          >
            <HiPlay />
          </Button>
        </div>
      </div>
      <div className="travlog__header-image">
        <Image src={header} alt="header" />
      </div>
      <div className="travlog__header-deco">
        <Image src={header_deco} alt="header_deco" />
      </div>
    </div>
  );
};

export default Header;
