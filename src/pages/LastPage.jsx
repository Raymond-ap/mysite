import React from "react";
import { FormInput, FormOption } from "../components";

const LastPage = () => {
  return (
    <form className="grid grid-cols-4 gap-3 w-3/2 m-3 p-5 shadow-2xl rounded-md bg-white">
      <div className="mt-0">
        <FormOption label={"Company ID"} value={"Company ID"} />
      </div>
      <div className="mt-5">
        <FormInput 
            value={""}
            onChange={(e) => {}}
        />
      </div>
      <div className="mt-0">
        <FormOption label={"Tax ID"} value={"Tax ID"} />
      </div>
      <div className="mt-5">
        <FormInput 
            value={""}
            onChange={(e) => {}}
        />
      </div>
    </form>
  );
};

export default LastPage;
