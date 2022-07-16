import React from "react";
import { FontAwesome } from "react-web-vector-icons";
import FormOption from "./FormOption";

const BusinessHours = () => {
  const options = ["9:00am", "8:00am"];
  return (
    <form className="justify-center w-3/2 content-center p-10">
      <p className="text-xl font-bold mb-1">Business hours</p>
      <p className="text-sm font-medium text-slate-400">
        Set your company's working hours
      </p>
      <div className="mt-10">
        {/*  */}
        <div className="grid mt-1 grid-cols-3 gap-4 items-center">
          <p className="capitalize text-sm font-semibold text-gray-400">
            Monday
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
        </div>
        {/*  */}
        <div className="grid mt-1 grid-cols-3 gap-4 items-center">
          <p className="text-sm capitalize font-semibold text-gray-400">
            Tuesday
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
        </div>
        {/*  */}
        <div className="grid mt-1 grid-cols-3 gap-4 items-center">
          <p className="text-sm capitalize font-semibold text-gray-400">
            wednesday
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
        </div>
        {/*  */}
        <div className="grid mt-1 grid-cols-3 gap-4 items-center">
          <p className="text-sm capitalize font-semibold text-gray-400">
            thursday
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
        </div>
        {/*  */}
        <div className="grid mt-1 grid-cols-3 gap-4 items-center">
          <p className="text-sm capitalize font-semibold text-gray-400">
            friday
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
        </div>
        {/*  */}
        <div className="grid mt-1 grid-cols-3 gap-4 items-center">
          <p className="text-sm capitalize font-semibold text-gray-400">
            saturday
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
        </div>
        {/*  */}
        <div className="grid mt-8 grid-cols-3 gap-4 items-center">
          <p className="text-sm capitalize font-semibold text-gray-400">
            launch
          </p>
          <div className="w-full">
            <FormOption options={options} />
          </div>
          <div className="w-full">
            <FormOption options={options} />
          </div>
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

export default BusinessHours;
