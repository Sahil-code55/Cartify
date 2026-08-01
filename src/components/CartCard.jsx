import React from 'react'
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { FaRegTrashAlt } from "react-icons/fa";

const CartCard = () => {
   
    const cardData = JSON.parse(localStorage.getItem("cart")) || [];
    
 

  return (

<div
  style={{paddingRight: "1.25rem",paddingLeft: "1.25rem", paddingBottom: "1rem", paddingTop: "1rem", }}
  className="hide-scrollbar flex-1 flex flex-col gap-3 overflow-y-auto "
>
  {cardData.map((product) => (
    <div
      key={product.id}
      style={{paddingLeft: "1rem",paddingRight: "1rem",paddingTop: "0.75rem",}}
      className="w-full rounded-2xl flex flex-col gap-3 border border-white/20 bg-[#141414]"
    >
      {/* Card */}
        <div className="flex  gap-2">
            {/* card image */}
            <div className="h-22 rounded-2xl w-22 bg-white">
            <img
             src={product.image}
             alt= ""
            className="h-full w-full object-contain"
            />
            </div>

            {/* card content */}
            <div style={{padding:"0.55rem"}} className="h-22 w-65  flex flex-col justify-center ">
                <h1 className="text-white font-semibold">{product.title}</h1>
                <p className="text-white text-xl">${product.price.toFixed(2)}</p>
                <span className="text-zinc-500 text-xs">${product.price.toFixed(2)} each</span>
            </div>
            </div>

            {/* card bottom  */}
              <div  style={{marginLeft:"6rem"}} className="h-12 w-65 flex items-center justify-between gap-3">

                <div 
                style={{paddingLeft:"0.45rem",paddingRight:"0.45rem"}} 
                className=" h-full w-1/2  flex items-center gap-5">

                    <Plus  style={{padding:"0.15rem"}} className="border-zinc-400 text-white border rounded-2xl cursor-pointer active:scale-95"/>
                    <span className="text-white text-lg">1</span>
                    <Minus   style={{padding:"0.15rem"}} className="border-zinc-400 text-white border rounded-2xl cursor-pointer active:scale-95"/>
                </div>

                <div className=" h-full w-1/6  flex items-center justify-center">
                    <FaRegTrashAlt className="text-red-700 text-md cursor-pointer active:scale-90"/>
                </div>
              </div>
    </div>
  ))}
</div>







  )
}

export default CartCard
