import React from 'react'
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const CartCard = () => {
   
const { cart, deleteProduct, totalAmount, increaseQuantity, decreaseQuantity } = useCart();
const { showToast } = useToast();
    
const handleDelete = (productId) => {
  deleteProduct(productId);
  showToast("Removed from cart 🗑️");
};


  return (

<div
  style={{paddingRight: "1.25rem",paddingLeft: "1.25rem", paddingBottom: "1rem", paddingTop: "1rem", }}
  className="hide-scrollbar flex-1 flex flex-col gap-3 overflow-y-auto "
>
  {cart.map((product) => (
    <div
      key={product.id}
      style={{paddingLeft: "1rem",paddingRight: "1rem",paddingTop: "0.75rem",}}
      className="w-full rounded-2xl flex flex-col gap-3 border border-white/20 bg-[#141414]"
    >
      {/* Card */}
        <div className="flex  gap-2">
            {/* card image */}
            <div className="h-20 rounded-2xl w-20 bg-white">
            <img
             src={product.image}
             alt= ""
            className="h-full w-full object-contain"
            />
            </div>

            {/* card content */}
            <div style={{padding:"0.05rem"}} className="min-h-22 w-67   flex flex-col justify-center break-words ">
                <h1 className="text-white fixed-content font-semibold">{product.title}</h1>
                <p className="text-white text-xl">${(product.price * product.quantity).toFixed(2)}</p>
                <span className="text-zinc-500 text-xs">${product.price.toFixed(2)} each</span>
            </div>
            </div>

            {/* card bottom  */}
              <div  style={{marginLeft:"5.6rem",marginBottom:"0.2rem"}} className=" rounded-2xl h-12 w-68 flex items-center justify-between gap-3">

                <div 
                style={{paddingLeft:"0.15rem",paddingRight:"0.15rem"}} 
                className=" h-full w-1/2  flex items-center gap-5">

                    <Plus
                     onClick={() => increaseQuantity(product.id)} 
                      style={{padding:"0.15rem"}} 
                      className="border-zinc-400 text-white border rounded-2xl cursor-pointer active:scale-95"/>

                    <span 
                    className="text-white text-lg">
                      {product.quantity}
                    </span>

                    <Minus
                     onClick={() => decreaseQuantity(product.id)} 
                        style={{padding:"0.15rem"}}
                         className="border-zinc-400 text-white border rounded-2xl cursor-pointer active:scale-95"/>
                </div>

                <div 
                onClick={() =>handleDelete(product.id)}
                 className=" h-full w-1/6  flex items-center justify-center">
                    <FaRegTrashAlt className="text-red-700 text-md cursor-pointer active:scale-90"/>
                </div>
              </div>
    </div>
  ))}
</div>







  )
}

export default CartCard
