import React from 'react'
import { FaStar, FaCartPlus } from "react-icons/fa";
import { useCart } from '../context/CartContext';
import { div } from 'framer-motion/client';

const ShopCard = ({ product}) => {
    if (!product) return null;


    const { cart, addToCart ,deleteProduct  } = useCart();
    const cartItem = cart.find((item) => item.id === product.id);


     
  return (
       <div
      className=" overflow-hidden rounded-[30px] border border-white/15 bg-white 
      transition-all duration-300 hover:-translate-y-2
       hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] hover:border-[#38BDF8]  border-shadow-[0_0px_20px_rgba(56,189,248,0.15)]" 
    >
      {/* Top Section */}
      <div style={{padding:"0 1.5rem", paddingTop:"1rem", paddingBottom:"1.05rem"}}
       className="relative bg-white">

        {/* Category Badge */}
        <span
         style={{padding:"5px 20px"}}
          className=" absolute left-4 top-4 rounded-full bg-zinc-500 text-xs font-medium text-white ">
          {product.category}
        </span>

        {/* Product Image */}
        <img
         style={{marginTop:"0.15rem"}}
          src={product.image}
          alt={product.title}
          className=" mx-auto  h-52 w-full object-contain transition-transform duration-300 hover:scale-105
        "/>
      </div>

      {/* Bottom Section */}
      <div  style={{padding:"0.5rem 1.1rem"}} className="bg-[#141414] ">

        {/* Category */}
        <span  style={{marginBottom:"2px"}} className="text-[13px] text-zinc-500">
          {product.category}
        </span>

        {/* Product Name */}
        <h2
        className=" text-md font-semibold text-white leading-8 h-16 line-clamp-2 overflow-hidden">
        {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={`text-[10px] ${
                index < Math.floor(product.rating.rate)
                  ? "text-yellow-400"
                  : "text-zinc-600"
              }`}
            />
          ))}

          <span className="ml-2 text-[12px] text-zinc-500">
            ({product.rating.count})
          </span>

        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-zinc-700" />

        {/* Price & Button */}
        <div style={{ marginTop:"5px"}}className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#38BDF8]">
            ${product.price}
          </h3>

       
          {!cartItem ? (
  <button
    onClick={() => addToCart(product)}
    className="flex items-center gap-2 rounded-full bg-[#38BDF8] font-semibold text-black transition-all duration-300 hover:scale-105 active:scale-95"
    style={{ padding: "0.25rem 1rem" }}
  >
    <FaCartPlus />
    Add
  </button>
) : (
    
  <button
    onClick={() => addToCart(product)}
    className="rounded-full bg-[#38BDF8] font-semibold text-black transition-all duration-300 hover:scale-105 active:scale-95"
    style={{ padding: "0.25rem 1rem", minWidth: "70px" }}
  >
    +{cartItem.quantity}
  </button>
)}

        </div>

      </div>
    </div>
  );

  
}

export default ShopCard
  