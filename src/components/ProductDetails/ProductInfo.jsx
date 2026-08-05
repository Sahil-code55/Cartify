// import React from 'react'

// const ProductInfo = () => {
//   return (
//     <div  className="h-full w-[60%] flex flex-col gap-4 bg-white rounded-[30px]  ">

//     </div>
//   )
// }

// export default ProductInfo


import React from "react";
import { FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import {MdLocalShipping,MdOutlineSecurity,MdOutlineReplay,} from "react-icons/md";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ProductInfo = () => {
  return (
    <div className="w-[55%] flex flex-col ">

      {/* Category */}
      <span
        style={{ padding: "6px 18px" }}
        className="w-fit rounded-full border border-blue-400 bg-blue-400/10 text-blue-400 text-xs font-semibold"
      >
        Electronics
      </span>

      {/* Title */}
      <h1
        style={{ marginTop: "1rem" }}
        className="text-3xl font-bold text-white leading-tight"
      >
        Smart Watch Series 5
      </h1>

      {/* Rating */}
      <div
        style={{ marginTop: "0.6rem" }}
        className="flex items-center gap-2"
      >
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-[15px] ${
              index < 4 ? "text-yellow-400" : "text-zinc-600"
            }`}
          />
        ))}

        <span
          style={{ marginLeft: "0.4rem" }}
          className="text-sm font-semibold text-zinc-300"
        >
          4.2
        </span>

        <span className="text-zinc-500 text-sm">(85 reviews)</span>
      </div>

      {/* Divider */}
      <div
        style={{  marginTop: "1rem" }}
        className="h-px bg-white/20 border-t-[2px] border-white"
      />

      {/* Price */}
      <h2 style={{ marginTop: "1rem", marginBottom: "1rem" }} className="text-4xl font-bold text-blue-400">
        $299.99
      </h2>

      {/* Divider */}
      <div
       
        className="h-px bg-white/2 border-t-[2px] border-white"
      />

      {/* Description */}
      <p
      style={{ marginTop: "1rem" }}
        className="text-zinc-400 leading-5 text-md"
      >
        Advanced smartwatch with health monitoring, GPS and water
        resistance. Stay connected and track your fitness goals.
      </p>

      {/* Buttons */}
      <div
        style={{ marginTop: "1.2rem" }}
        className="flex gap-5"
      >
        <button
          className="login-btn flex-1 h-13 rounded-2xl  text-black
          font-semibold text-xl flex items-center justify-center gap-3
          hover:scale-[1.02] transition-all duration-300 active:scale-95 
          hover:shadow-[0_10px_30px_rgba(0,191,255,0.3)]
"
        >
          <FiShoppingCart />
          Add to Cart
        </button>

        <button
          className="w-13 h-13 rounded-2xl border border-white/10
          flex items-center justify-center text-zinc-400
          hover:border-blue-400 hover:text-blue-400
          transition-all duration-300"
        >
          <FiHeart className="text-2xl" />
        </button>
      </div>

      {/* Features */}
      <div
        style={{ marginTop: "1.2rem" }}
        className="grid grid-cols-3 gap-5  "
      >
        <FeatureCard
        
          icon={<MdLocalShipping className="text-blue-400" />}
          title="Free Delivery"
          subtitle="On orders $50+"
        />

        <FeatureCard
          icon={<MdOutlineSecurity className="text-blue-400"  />}
          title="Secure Pay"
          subtitle="256-bit SSL"
        />

        <FeatureCard
          icon={<MdOutlineReplay className="text-blue-400" />}
          title="Easy Returns"
          subtitle="30-day policy"
        />
      </div>

      {/* Navigation */}
      <div
        style={{ marginTop: "3rem" }}
        className="grid grid-cols-2 gap-5"
      >
        <button
          className="h-16 rounded-2xl bg-zinc-800 text-white
          flex items-center justify-center gap-3
          hover:bg-zinc-700 transition-all"
        >
          <IoChevronBack />
          Previous
        </button>

        <button
          className="h-16 rounded-2xl bg-[#C6FF00]
          text-black font-semibold
          flex items-center justify-center gap-3
          hover:scale-[1.02] transition-all duration-300 active:scale-95"
        >
          Next
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div
      className="h-28 rounded-2xl border border-white/20
      flex flex-col items-center justify-center"
    >
      <div className="text-[#C6FF00] text-2xl">{icon}</div>

      <h3
        style={{ marginTop: "0.75rem" }}
        className="text-white font-semibold"
      >
        {title}
      </h3>

      <p className="text-sm text-zinc-500">
        {subtitle}
      </p>
    </div>
  );
};

export default ProductInfo;