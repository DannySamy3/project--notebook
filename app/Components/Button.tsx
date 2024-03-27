"use client";
import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <>
      <button
        className={`btn mx-6 text-gray-500 hover:text-gray-300 font-bold ${
          isHomePage ? "w-1/5" : "w-1/2"
        } 
         mx-5 text-lg`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
