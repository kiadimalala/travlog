import React from "react";
import "./brand.css";

import Image from "next/image";

import { tripadvisor, expedia, booking, airbnb, orbitz } from "@/images/index";

const brands: any = [tripadvisor, expedia, booking, airbnb, orbitz];

const Brand = () => {
  return (
    <div className="travlog__brand ">
      <div className="travlog__brand-container">
        {brands.map((brand: any, index: number) => (
          <div key={index}>
            <Image alt="brand" src={brand} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
