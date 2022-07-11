import React from "react";

const FormOption = () => {
  return (
    <div className="input-wrapper">
      <p className="text-sm font-semibold mb-2 text-slate-400 capitalize">
        {label}
      </p>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-md border-2 border-slate-400 p-1 outline-none"
      />
    </div>
  );
};

export default FormOption