import React from "react";
import "./services.css";

import { circular } from "@/fonts/index";
import { Service } from "@/components";
import { service1, service2, service3 } from "@/images/index";

const services = [
  {
    title: "best tour guide",
    text: "What looked like a small patch of purple grass, above five feet.",
    img: service1,
  },
  {
    title: "easy booking",
    text: "Square, was moving across the sand in their direction.",
    img: service2,
  },
];

const Services = () => {
  return (
    <div className={`${circular.className} travlog__services`}>
      <div className="travlog__services-content">
        <h3>services</h3>
        <h1>Our top value categories for you</h1>
      </div>
      <div className="travlog__services-content_services">
        {services.map((service, index) => (
          <Service key={service.title + index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
