import React from 'react'
import { Package } from "lucide-react";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';

const EmptyCardUI = () => {
  const navigate = useNavigate();
  const { closeCart } = useCart();

  return (
         <div 
        style={{paddingRight:"1.25rem", paddingLeft:"1.25rem"}}
         className="flex-1 flex  ">
          <div className=" flex flex-col items-center justify-center w-full h-full text-center">
            <div 
            className="mx-auto h-24 w-24 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center"
            >
              <Package size={40} className="text-zinc-600" />
            </div>
            <h3 className="text-2xl font-semibold text-white ">
              Your cart is empty
            </h3>

            <p style={{marginTop:"0.3rem"}} className="text-zinc-500 mt-3 leading-relaxed">
              Looks like you haven't added
              <br />
              any products yet.
            </p>

            <button
            onClick={() =>{ 
            navigate("/shop")
            closeCart()

            }}
            style={{marginTop:"1.6rem", padding:"0.75rem 1rem"}}
              className="cart-drawer w-1/2  text-black font-semibold py-3 rounded-2xl flex items-center justify-center cursor-pointer gap-1
              hover:scale-103 active:scale-100 transition-all duration-300"
            >
              Browse Products <IoMdArrowForward className="text-xl" />
            </button>
          </div>
        </div> 
  )
}

export default EmptyCardUI