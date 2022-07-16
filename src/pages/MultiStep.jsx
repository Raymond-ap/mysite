import React from "react";


import { Pricing } from "../components";

const MultiStep = () => {
  return (
    <div className="w-screen flex flex-row   bg-white">
      <div className="bg-cyan-500  basis-1/4 p-10">
        <div className="font-bold text-2xl mb-6 from-neutral-900">
          <h1>Logo here</h1>
        </div>
      </div>
      <div className="p-10 mr-36 ml-10 justify-center w-2/3 content-center ">
       <Pricing/>
      </div>
    </div>
  );
};

export default MultiStep;
