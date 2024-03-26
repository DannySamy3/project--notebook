"use client";

import React from "react";
import Button from "./button";

const nav = () => {
  return (
    <section className="navbar-start mt-12 bg-neutral py-8 rounded-r-lg rounded-br-md h-screen w-1/5 space-y-5 bg-gray-700">
      <h2 className="mx-2 font-bold text-2xl mb-3 text-gray-300 px-4 text-3xl mt-6">
        YOUR PROJECTS
      </h2>
      <Button>+Add Project</Button>
    </section>
  );
};

export default nav;
