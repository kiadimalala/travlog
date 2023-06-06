import React from "react";
import "./travel.css";

import Image from "next/image";

import { travel, travel_deco } from "@/images/index";
import { circular } from "@/fonts/index";
import { Package } from "@/components";

const packages: any = [
  { text: "Holiday package", number: 500 },
  { text: "Luxury hotel", number: 100 },
  { text: "Premium airlines", number: 7 },
  { text: "Happy customer", number: 2000 },
];

const Travel = () => {
  return (
    <div className={`${circular.className} travlog__travel`}>
      <div className="travlog__travel-image">
        <Image src={travel} alt="travel" />
      </div>
      <div className="travlog__travel-content">
        <div className="travlog__travel-content_details">
          <h3>travel point</h3>
          <h1>We helping you find your dream location</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="travlog__travel-content_packages">
          {packages.map((pack: any, index: any) => (
            <Package key={pack.text + index} pack={pack} />
          ))}
        </div>
      </div>
      <div className="travlog__travel-deco">
        <Image src={travel_deco} alt="travel" />
      </div>
    </div>
  );
};

export default Travel;
