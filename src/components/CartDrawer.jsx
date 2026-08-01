import { X, ShoppingBag, Package } from "lucide-react";
import { useCart } from "../context/CartContext";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { FaRegTrashAlt } from "react-icons/fa";
import EmptyCardUI from "./EmptyCardUI";
import CartCard from "./CartCard";


const CartDrawer = () => {
  const { isCartOpen, closeCart, cart  } = useCart();

  const navigate = useNavigate();


  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40
        ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[430px] bg-[#111111] border-l border-zinc-800 z-50
        transition-transform duration-300 ease-in-out flex flex-col
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div style={{paddingLeft:"1.25rem", paddingRight:"1.25rem",paddingTop:"1.8rem", paddingBottom:"1.41rem"}} className="flex items-center justify-between px-6 py-5 border-b border-white">
          <div className="flex  items-center gap-3">
            <ShoppingBag className="text-blue-500" size={22} />
            
              <h2 className="text-white text-xl font-semibold">
                 Cart
              </h2>
              <p style={{padding:"0.15rem 0.75rem"}} className="text-sm text-blue-500 bg-[#0c47f930] rounded-full">
                0 Items
              </p>
           
          </div>

          <button
            onClick={closeCart}
            className="text-zinc-400 hover:text-blue-500 hover:rotate-180 transition-transform duration-300"
          >
            <X size={24} />
          </button>
        </div>

    
    {cart.length === 0 ? 
    ( <EmptyCardUI />)
     : 
    ( <CartCard/> )  }

     
    {/* bottom section */}
    <div style={{paddingTop:" 0.65rem",paddingBottom:"1rem", paddingLeft:"1.25rem", paddingRight:"1.25rem"}}
     className="border-t border-white">
      <div className="flex items-center justify-between">
        <span className="text-white text-lg ">Total:</span>
        <span className="text-white font-semibold text-lg">$0.00</span>
        </div>
       
        <button
        style={{marginTop:"1.25rem", padding:"0.75rem 1rem"}}
        className="cart-drawer w-full  text-black font-medium rounded-2xl flex items-center justify-center cursor-pointer gap-1
        hover:scale-103 active:scale-100 transition-all duration-300"
        > <span className="text-lg">Checkout</span> <IoMdArrowForward className="text-xl" /> </button>
    
    <p style={{marginTop:"0.7rem"}} className="text-zinc-500 text-sm text-center cursor-pointer hover:text-[#F85433] transition-colors duration-300 active:scale-95">
      Clear Cart
    </p>

        </div>


         
      </div>
    </>
  );
};

export default CartDrawer;