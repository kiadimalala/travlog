import React from "react";
import "./cta.css";
import { Input, Button } from "@/components";
import { MdEmail } from "react-icons/md";

import Image from "next/image";

import { cta_deco } from "@/images/index";

const CTA = () => {
  return (
    <div className="travlog__cta section__padding">
      <div className="travlog__cta-container">
        <div className="travlog__cta-container-content">
          <h3>subscribe to our newsletter</h3>
          <h1>Prepare yourself & let’s explore the beauty of the world</h1>
        </div>
        <div className="travlog__cta-container-form">
          <Input placeholder="Your email">
            <MdEmail />
          </Input>
          <Button className="btn-subscribe" label="Subscribe" />
        </div>
        <div className="travlog__cta-deco">
          <Image src={cta_deco} alt="cta_deco" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
