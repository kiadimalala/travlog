"use client";
import React, { useEffect, useRef, useState } from "react";
import "./testimonial.css";

import { motion } from "framer-motion";

import Image from "next/image";

interface TestimonialProps {
  className?: string;
  testimonial?: any;
  pos?: any;
  position?: any;
}

const Testimonial: React.FC<TestimonialProps> = ({
  className,
  testimonial,
  pos,
  position,
}) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [containerPos, setContainerPos] = useState(0);

  const [currentScreen, setCurrentScreen] = useState("");
  const [containerSize, setContainerSize] = useState(872);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  

  return (
    <motion.div
      className="travlog__testimonial"
      initial={{ opacity: 0 }}
      animate={{
        opacity: pos === position ? 1 : 0.8,
        left: `${(pos - position) * containerSize - containerPos}px`,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="travlog__testimonial-avatar">
        <Image
          loading="lazy"
          width={128}
          height={128}
          src={testimonial.imgUrl}
          alt={`avatar`}
        />
      </div>
      <div className="travlog__testimonial-reviewer">
        <span>{testimonial.name}</span> / <span>{testimonial.occupation}</span>
      </div>
      <div className="travlog__testimonial-rating">{windowSize[0]}</div>
      <p>{testimonial.review}</p>
    </motion.div>
  );
};

export default Testimonial;
