"use client";
import React, { useEffect, useRef, useState } from "react";
import "./services.css";

import { circular } from "@/fonts/index";
import { Service } from "@/components";
import { service1, service2, service3 } from "@/images/index";
import { motion } from "framer-motion";

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
  {
    title: "Weather Forecast",
    text: "What looked like a small patch of purple grass, above five feet.",
    img: service3,
  },
];

const Services = () => {
  const carousel = useRef<any>(null);
  const [width, setWidth] = useState(0);
  const [windowSize, setWindowSize] = useState<number[] | null>(null);

  useEffect(() => {
    carousel &&
      setWidth(carousel?.current?.scrollWidth - carousel?.current?.offsetWidth);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }, []);

  return (
    <div className={`${circular.className} travlog__services section__padding`}>
      <div className="travlog__services-content">
        <h3>services</h3>
        <h1>Our top value categories for you</h1>
      </div>
      <motion.div
        ref={carousel}
        className="travlog__services-content_services-carousel"
      >
        <motion.div
          className="inner__carousel"
          drag={
            windowSize && windowSize?.length > 0 && windowSize[0] <= 1024
              ? false
              : "x"
          }
          dragConstraints={{ right: 0, left: -width }}
        >
          {services.map((service, index) => (
            <Service key={service.title + index} service={service} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
