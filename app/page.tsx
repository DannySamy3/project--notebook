"use client";

import { Amplify } from "aws-amplify";
import config from "@/src/amplifyconfiguration.json";
Amplify.configure(config);

import Main from "./Components/Main";

const page = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default page;
