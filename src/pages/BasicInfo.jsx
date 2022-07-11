import React from "react";
import { FormInput, FormOption } from "../components";

const BasicInfo = () => {
  const [address, setAddress] = React.useState("");
  const [name, setName] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [location, setlocation] = React.useState("");
  return (
    <form className="grid grid-cols-2 gap-3 w-3/2 m-3 p-5 shadow-2xl rounded-md bg-white">
      <FormOption label={"organisation type"} value={"Individual"} />
      <FormInput
        label={"organisation name"}
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <FormOption label={"Industry"} value={""} onChange={(e) => {}} />
      <FormOption label={"bussiness location"} value={"United states"} />
    </form>
  );
};

export default BasicInfo;
