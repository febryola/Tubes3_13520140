import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`rounded-[1rem] bg-red p-[0.875rem] text-[0.875rem] font-bold text-white transition duration-300 ease-in-out hover:bg-green hover:shadow-lg lg:p-[1.5rem] lg:text-[1.5rem] ${className}`} onClick={onClick}>{children}</button>
  );
};
export default Button;
