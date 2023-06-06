import React from "react";
import "./package.css";

interface PackageProps {
  className?: string;
  pack?: any;
}

const Package: React.FC<PackageProps> = ({ className, pack }) => {
  return (
    <div className="travlog__package">
      <h1> {pack.number} </h1>
      <p>{pack.text} </p>
    </div>
  );
};

export default Package;
