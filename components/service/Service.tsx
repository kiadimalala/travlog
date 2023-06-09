"use client";
import React from "react";
import "./service.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface serviceProps {
  className?: string;
  service?: any;
}

const Service: React.FC<serviceProps> = ({ className, service }) => {
  return (
    <motion.div className="travlog__service">
      <div className="travlog__service-image">
        <Image src={service.img} alt={service.tittle} />
      </div>
      <div className="travlog__service-content">
        <h1>{service.title}</h1>
        <p>{service.text}</p>
      </div>
    </motion.div>
  );
};

export default Service;
