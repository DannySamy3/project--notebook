"use client";
import React from "react";

interface props {
  children: "string";
}

const Button = ({ children, isHomePage }) => {
  return (
    <>
      <button
        className={`btn mx-6 text-gray-500 hover:text-gray-300 font-bold ${
          isHomePage ? "w-1/5" : "w-1/2"
        } 
         mx-5 text-lg`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
