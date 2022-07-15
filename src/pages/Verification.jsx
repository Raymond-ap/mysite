import React from "react";

const Verification = () => {

  return (
    <div className="w-screen text-center h-screen grid content-center justify-center bg-white">
      <div className="p-5 rounded-md">
        <div className="font-bold text-2xl mb-6 from-neutral-900">
          <h1>Logo here</h1>
        </div>
        <h1 className="font-bold text-2xl mb-3 from-neutral-900">
          Check your email
        </h1>
        <div className="">
            <p className="text-slate-400">
                A link has been sent to your email user@example.com. Open your email <br/> to finish setting up your account
            </p>
        </div>
        <AppButton/>
      </div>
    </div>
  );
};

const AppButton = () => {
  return (
    <button className="w-96 bg-cyan-600 outline-hidden hover:bg-cyan-700 mt-2 text-white font-bold py-2 px-4 rounded">
      Go to email
    </button>
  );
};


export default Verification;
