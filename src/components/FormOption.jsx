import React from "react";

const FormOption = ({label, value}) => {
  return (
    <div className="input-wrapper">
      <p className="text-sm font-semibold mb-2 text-slate-400 capitalize">
        {label}
      </p>
     <select className="w-full rounded-md border-2 text-slate-400 border-slate-400 p-1 outline-none">
        <option value={value}>{value}</option>
      </select>
    </div>
  );
};

export default FormOption