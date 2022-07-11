import React from "react";
import { FormInput } from "../components";

const Address = () => {
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  const [city, setCity] = React.useState("");
  return (
    <form className="grid grid-cols-2 gap-3 w-3/2 m-3 p-5 shadow-2xl rounded-md bg-white">
      <FormInput
        label={"Adress line 1"}
        placeholder={"Inidividual"}
        onChange={(e) => setAddress1(e.target.value)}
        value={address1}
      />
      <FormInput
        label={"Adress line 2"}
        onChange={(e) => setAddress2(e.target.value)}
        value={address2}
      />
      <FormInput
        label={"city"}
        onChange={(e) => {}}
        value={""}
      />
      <FormInput
        label={"postcode"}
        onChange={(e) => {}}
        value={""}
      />
      <FormInput
        label={"label"}
        onChange={(e) => {}}
        value={""}
      />
      <FormInput
        label={"fax"}
        onChange={(e) => {}}
        value={""}
      />
      <FormInput
        label={"website"}
        onChange={(e) => {}}
        value={""}
      />
    </form>
  );
};

export default Address;
