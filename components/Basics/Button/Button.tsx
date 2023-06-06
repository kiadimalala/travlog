import React from "react";
import "./Button.css";
interface BtnProps {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}

const Button: React.FC<BtnProps> = ({
  className,
  label,
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`travlog_btn ${className ? className : ""}`}
    >
      {label && <p>{label}</p>}
      {children && children}
    </button>
  );
};

export default Button;
