import React from "react";
import FormInput from "./FormInput";
import Icon, { FontAwesome } from "react-web-vector-icons";

const PersonalInformation = () => {
  return (
    <form className="justify-center w-3/2 content-center mt-10 p-10">
      <p className="text-xl font-bold mb-1">Your personal information</p>
      <p className="text-sm font-medium text-slate-400">
        Enter your personal information to continue
      </p>
      <div className="mt-10">
        <div className="mt-10 grid grid-cols-2 gap-3">
          <FormInput label={"first name"} />
          <FormInput label={"last name"} />
        </div>
        <div className="mt-4">
          <FormInput label={"Email address"} />
        </div>
        <div className="mt-4">
          <FormInput label={"phone number"} />
        </div>
        <div className="mt-7">
          <NextButton />
        </div>
      </div>
    </form>
  );
};

const NextButton = () => {
  return (
    <div className="flex justify-end mt-10">
      <button className="bg-cyan-600 flex items-center hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md">
        Next
        <div className="mr-2">
          <FontAwesome color={"#fff"} size={10} name="long-arrow-right" />
        </div>
      </button>
    </div>
  );
};

export default PersonalInformation;
