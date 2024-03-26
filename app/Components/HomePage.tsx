import React from "react";
import Image from "next/image";
import Button from "./button";

const HomePage = () => {
  interface Props {
    StaticImageData: "string";
  }
  return (
    <div className="w-4/5 mx-auto my-44">
      <div className="flex flex-col items-center ">
        <Image
          src="/no-projects.png"
          alt="notebook image"
          width={90}
          height={90}
          className="mb-4"
        />
        <p
          className="text-stone-500 text-2xl font-bold mb-3
        "
        >
          No Project Selected
        </p>
        <p className="text-gray-400 font-medium text-xl mb-12">
          Select a project or get started with a new one
        </p>
        <Button >Create new project</Button>
      </div>
    </div>
  );
};

export default HomePage;