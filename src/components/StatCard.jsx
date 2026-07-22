import React from 'react'
import { FaCartShopping, FaStar,FaTags,FaIndianRupeeSign, FaBox,} from "react-icons/fa6"; 

const StatCard = () => {
  return (
   <div className="StatCard flex items-start gap-5 rounded-3xl border border-white/20 bg-white/5 h-40   ">
    {/* icon */}
  <div className="h-13 w-13 rounded-2xl bg-lime-400/10 flex items-center justify-center  backdrop-blur-md hover:border-lime-400/30 transition-all duration-300">

    <FaBox className="text-2xl text-lime-400" />
  </div>

  {/* Content */}
  <div className="flex flex-col">
    <h2 className="text-3xl text-white font-bold leading-none">0</h2>
    <p className="text-xl font-medium mt-1">Cart Items</p>
    <span className="text-zinc-500 text-base mt-1">
      In your bag
    </span>
  </div>
</div>
  )
}

export default StatCard
