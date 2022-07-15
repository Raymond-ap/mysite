import React from "react";
import FormInput from "./FormInput";
import Icon, { FontAwesome } from "react-web-vector-icons";

const CompanyInformation = () => {
  return (
    <form className="justify-center w-3/2 content-center p-10">
      <p className="text-xl font-bold mb-1">Your company information</p>
      <p className="text-sm font-medium text-slate-400">
        Enter your company information to continue
      </p>
      <div className="mt-10">
        <ImagePicker />
        <div className="mt-10 grid grid-cols-2 gap-3">
          <FormInput label={"organisation type"} />
          <FormInput label={"name"} />
        </div>
        <div className="mt-4">
          <FormInput label={"industry"} />
        </div>
        <div className="mt-4">
          <FormInput label={"business location"} />
        </div>
        <div className="mt-7 flex justify-between">
          <PrevButton />
          <NextButton />
        </div>
      </div>
    </form>
  );
};

const ImagePicker = () => {
  return <div className="p-5 shadow-md rounded-md bg-white">
     <label for="dropzone-file">
        <div className="flex justify-center items-center">
            <svg aria-hidden="true" className="w-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="ml-3 text-cyan-400 font-bold text-base">Upload logo</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
  </div>;
};

const NextButton = () => {
  return (
    <div className="mt-10">
      <button className="bg-cyan-600 flex items-center hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md">
        Next
        <div className="mr-2">
          <FontAwesome color={"#fff"} size={10} name="long-arrow-right" />
        </div>
      </button>
    </div>
  );
};
const PrevButton = () => {
  return (
    <div className="mt-10">
      <button className="flex items-center border-2 border-cyan-400 text-cyan-400 font-medium py-2 px-4 rounded-md">
        <div className="mr-2">
          <FontAwesome color={"cyan"} size={10} name="long-arrow-right" />
        </div>
        Back
      </button>
    </div>
  );
};

export default CompanyInformation;
