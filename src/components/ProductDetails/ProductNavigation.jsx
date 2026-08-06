import React from 'react'

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const ProductNavigation = ({ product , nextProduct ,previousProduct}) => {

   const navigate = useNavigate()
  return (
     <div

        style={{ marginTop: "1.6rem" }}
        className="grid grid-cols-2 gap-5"
      >
        <button
       disabled={!previousProduct}
  onClick={() => navigate(`/product-details/${previousProduct.id}`)}
          className="h-13 rounded-2xl bg-zinc-800 text-white
          flex items-center justify-center gap-3
          hover:bg-zinc-700 transition-all text-xl hover:scale-103 active:scale-100"
        >
          <IoChevronBack />
          Previous
        </button>

        <button
       
    disabled={!nextProduct}
    onClick={() =>
       navigate(`/product-details/${nextProduct.id}`) 
    }
          className="login-btn h-13 rounded-2xl 
          text-black font-semibold text-xl
          flex items-center justify-center gap-2
          hover:scale-[1.02] transition-all duration-300 active:scale-95 hover:shadow-[0_10px_30px_rgba(0,191,255,0.3)]"
        >
          Next
          <IoChevronForward />
        </button>
      </div>

  )
}

export default ProductNavigation


