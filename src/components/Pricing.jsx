import React from "react";
import { FontAwesome } from "react-web-vector-icons";
import PricingCard from "./PriceCard";

const pricingData = [
  {
    category: "Basic",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "Basic includes:",
      "CMS reportes",
      "Daily SMS reminders",
      "Customer support 24/7",
      "Up to 50 members",
      "Unlimited clients",
      "Account support",
    ],
  },
  {
    category: "Standard",
    price: "$100",
    description: "Perfect for small businesses",
    features: [
      "Standard includes:",
      "CMS reportes",
      "Daily SMS reminders",
      "Customer support 24/7",
      "Up to 50 members",
      "Unlimited clients",
      "Account support",
    ],
  },
  {
    category: "Premium",
    price: "$100",
    description: "Perfect for small businesses",
    features: [
      "Standard includes:",
      "CMS reportes",
      "Daily SMS reminders",
      "Customer support 24/7",
      "Up to 50 members",
      "Unlimited clients",
      "Account support",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="justify-center  content-center p-10">
      <p className="text-xl font-bold mb-1">Pricing</p>
      <p className="text-sm font-medium text-slate-400">
        Select your subscription to continue
      </p>
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-3">
        {pricingData.map((item, index) => {
            return<PricingCard
             key={index}
             item={item}
             background={index === 0 && "bg-cyan-500"} />
        })}
        </div>
        <div className="mt-4 flex justify-between">
          <PrevButton />
          <NextButton />
        </div>
      </div>
    </div>
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

export default Pricing;
