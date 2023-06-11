"use client";
import React, { useState } from "react";
import { Button, Testimonial } from "@/components";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";

import "./testimonials.css";

const testimonials = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    name: "Lana Lang",
    occupation: "Globe trotter",
    rating: 4,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    name: "Stan Lee",
    occupation: "travel enthusiast",
    rating: 3,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    name: "Ada Smith",
    occupation: "student",
    rating: 5,
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
];

const Testimonials = () => {
  const swiper = useSwiper();
  const [position, setPosition] = useState(0);

  const onNext = () => {
    if (position < testimonials.length - 1) setPosition(position + 1);
  };

  const onPrev = () => {
    if (position > 0) setPosition(position - 1);
  };

  return (
    <div className="travlog__testimonials section__padding">
      <h3>testimonials</h3>
      <h1>Trust our client</h1>
      <div className="travlog__testimonials-content">
        <Button
          className={`btn-left ${position > 0 ? "active" : ""}`}
          onClick={onPrev}
        >
          <BsArrowLeft />
        </Button>
        <div className="travlog__testimonials-container">
          {testimonials.map((testimonial: any, index: any) => (
            <Testimonial
              key={index}
              testimonial={testimonial}
              pos={index}
              position={position}
            />
          ))}
        </div>
        <Button
          className={`btn-right ${
            position < testimonials.length - 1 ? "active" : ""
          }`}
          onClick={onNext}
        >
          <BsArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
