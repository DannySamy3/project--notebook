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
        className={`btn mx-6 text-gray-500 hover:text-gray-300 font-bold ${
          props.isHomePage ? 'w-1/5' : 'w-1/2'
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
