import React from "react";
import "./features.css";
import Image from "next/image";
import { features } from "@/images/index";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

import { MdLocationOn } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { HiTicket } from "react-icons/hi2";

interface Feature {
  title: string;
  text: string;
  ftClass: string;
  icon: React.ReactNode;
}

const _features: Feature[] = [
  {
    title: "We offer best services",
    text: " Lorem ipsum dolor sit amet consectetur.",
    ftClass: "orange",
    icon: <MdLocationOn />,
  },
  {
    title: "Schedule your trip",
    text: " Lorem ipsum dolor sit amet consectetur.",
    ftClass: "yellow",
    icon: <IoCalendar />,
  },
  {
    title: "Get discounted coupons",
    text: " Lorem ipsum dolor sit amet consectetur.",
    ftClass: "pink",
    icon: <HiTicket />,
  },
];

//FaLocationDot
//IoCalendar
//HiTicket

const Features = () => {
  return (
    <div className="travlog__features">
      <div className="travlog__features-content">
        <div className="travlog__features-content_details">
          <h3>key features</h3>
          <h1>We offer best services</h1>
          <p className={inter.className}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="travlog__features-content_features">
          {_features.map((feature: any, index: any) => (
            <div
              key={feature.title + index}
              className="travlog__feature-content_feature-feature"
            >
              <div className={feature.ftClass}>{feature.icon}</div>
              <div>
                <h3>{feature.title}</h3>
                <p className={inter.className}>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="travlog__features-image">
        <Image src={features} alt="feature" />
      </div>
    </div>
  );
};

export default Features;
