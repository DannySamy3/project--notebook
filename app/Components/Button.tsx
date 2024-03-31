'use client';
import React from 'react';

interface btnProps {
  children: string;
  isHomePage: boolean;
  addproject: any;
}

const Button: React.FC<btnProps> = ({ children, ...props }) => {
  return (
    <>
      <button
        className={`btn text-gray-500 hover:text-gray-300 font-bold ${
          props.isHomePage ? 'w-1/5 mx-6  ' : 'w-1/2 inline-block ml-1'
        } 
         mx-5 text-lg`}
        onClick={props.addproject}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
