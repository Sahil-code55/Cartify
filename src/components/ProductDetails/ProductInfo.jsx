

import React from "react";
import { FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import {MdLocalShipping,MdOutlineSecurity,MdOutlineReplay,} from "react-icons/md";

import { useCart } from "../../context/CartContext";
import ProductNavigation from "./ProductNavigation";



const ProductInfo = ( { product , nextProduct ,previousProduct}) => {
const { addToCart } = useCart();

  return (
    <div className="w-[55%] flex flex-col ">

      {/* Category */}
      <span
        style={{ padding: "6px 18px" }}
        className="w-fit rounded-full border border-blue-400 bg-blue-400/10 text-blue-400 text-xs font-semibold"
      >
        {product.category}
      </span>

      {/* Title */}
      <h1
        style={{ marginTop: "1rem" }}
        className="text-3xl font-bold text-white leading-tight"
      >
        {product.title}
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
          {product.rating.rate}
        </span>

        <span className="text-zinc-500 text-sm">({product.rating.count} reviews)</span>
      </div>

      {/* Divider */}
      <div
        style={{  marginTop: "1rem" }}
        className="h-px bg-white/20 border-t-[2px] border-white"
      />

      {/* Price */}
      <h2 style={{ marginTop: "1rem", marginBottom: "1rem" }} className="text-4xl font-bold text-blue-400">
        ${product.price.toFixed(2)}
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
        {product.description}
      </p>

      {/* Buttons */}
      <div
        onClick={() => addToCart(product)}
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
        className="grid grid-cols-3 gap-5 "
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
 
      <ProductNavigation  product={product}   previousProduct={previousProduct} nextProduct={nextProduct}/>
    </div>
  );
};

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <div
      className="h-25 rounded-2xl border border-white/20
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