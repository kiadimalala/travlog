import React from "react";
import "./input.css";

interface InputProps {
  className?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  value,
  type,
  onChange,
  children,
  placeholder,
}) => {
  return (
    <div className="input__container">
      <input
        className={`input ${className ? className : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {children && children}
    </div>
  );
};

export default Input;
