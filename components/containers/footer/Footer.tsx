import React from "react";
import "./footer.css";

import Image from "next/image";

import { logo } from "@/images/index";
import Link from "next/link";

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

const _links = [
  {
    title: "Company",
    links: ["about","career","mobile"],
  },
  {
    title: "Contact",
    links: ["why travlog?", "partner with us", "FAQ's", "blog"],
  },
  {
    title: "Meet us",
    links: [
      "+00 92 1234 56789",
      "info@travlog.com",
      "205. r street, new york",
      "BD23200",
    ],
  },
];
const Footer = () => {
  return (
    <div className="travlog__footer section__padding">
      <div className="travlog__footer-logo">
        <Image src={logo} alt="logo" />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="travlog__footer-socials">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
      <div className="travlog__footer-contact">
        {_links.map((item: any, index: any) => (
          <div
            key={item.title + index}
            className="travlog__footer-contact_about"
          >
            <h3>{item.title}</h3>
            <div className="travlog__footer-contact_about-links">
              {item.links.map((link: any, index: any) => (
                <Link className={inter.className} key={index} href="#company">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
