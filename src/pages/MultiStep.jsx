import React from "react";


import { CompanyInformation } from "../components";

const MultiStep = () => {
  return (
    <div className="w-screen flex flex-row  h-screen bg-white">
      <div className="bg-cyan-500 h-screen basis-1/4 p-10">
        <div className="font-bold text-2xl mb-6 from-neutral-900">
          <h1>Logo here</h1>
        </div>
      </div>
      <div className="p-10 mr-36 ml-10 justify-center w-2/3 content-center ">
       <CompanyInformation/>
      </div>
    </div>
  );
};

export default MultiStep;
