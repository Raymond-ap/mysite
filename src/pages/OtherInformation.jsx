import React from "react";
import { FormInput, FormOption } from "../components";

const OtherInformation = () => {
  const options = [
    "Accrual (you owe tax as of invoice date)",
    "Cash (you owe tax upon payment receipt)",
    "Both",
  ];

  return (
    <form className="grid grid-cols-2 gap-3 w-3/2 m-3 p-5 shadow-2xl rounded-md bg-white">
      {/* grid-1 */}
      <FormOption label={"Base currency"} />
      <div className="grid grid-cols-2 w-full gap-3">
        <div className="w-2/2">
          <FormInput label={"FIscal year"} />
        </div>
        <div className="mt-5">
          <FormOption value={"1"} />
        </div>
      </div>

      {/* grid-2 */}
      <FormOption label={"Report basis"} />
      <FormOption label={"Language"}/>

      {/* grid-3 */}
      <FormOption label={"Report basis"} options={options} />
      <FormOption label={"date format"}  />
    </form>
  );
};

export default OtherInformation;
