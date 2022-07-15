import React from "react";
import FormInput from "./FormInput";
import Icon, { FontAwesome } from "react-web-vector-icons";

const CompanyLink = () => {
  return (
    <form className="justify-center w-3/2 content-center p-10">
      <p className="text-xl font-bold mb-1">Company link</p>
      <p className="text-sm font-medium text-slate-400">
        Create your company login link
      </p>
      <div className="mt-10">
        <div class="flex border-2 border-slate-400 rounded-md">
          <input type="text" id="website-admin" placeholder="your business name" className="w-full py-1.5 px-3 outline-none" />
          <span class="inline-flex items-center px-3 text-sm text-slate-500 bg-gray-200  border-gray-300">
            .finex.com
          </span>
        </div>
        <div className="mt-7 flex justify-between">
          <PrevButton />
          <NextButton />
        </div>
      </div>
    </form>
  );
};

const NextButton = () => {
  return (
    <div className="mt-10">
      <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md">
        Finish setup       
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

export default CompanyLink;
