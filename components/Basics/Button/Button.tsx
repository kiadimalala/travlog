import React from "react";
import "./Button.css";
interface BtnProps {
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  ref?:any
}

const Button: React.FC<BtnProps> = ({
  className,
  label,
  children,
  onClick,
  ref
}) => {
  return (
    <button 
    ref={ref}
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
