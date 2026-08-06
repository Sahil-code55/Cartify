import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ProductBreadCrumb = ({category, title  } ) => {

  const navigate = useNavigate()
  return (
    <div
      style={{ marginBottom: "2rem" }}
      className="flex items-center gap-3 text-sm"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-zinc-500 transition-all duration-300 hover:text-white"
      >
        <IoArrowBack className="text-lg" />
      </button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2">
        <span
        onClick={() => navigate("/shop")}
         className="text-zinc-500 hover:cursor-pointer">Products</span>

        <span className="text-zinc-700">/</span>

        <span className="text-zinc-400 capitalize">
          {category}
        </span>

        <span className="text-zinc-700">/</span>

        <span className="text-white font-medium truncate max-w-[220px]">
          {title}
        </span>
      </div>
    </div>
  )
}

export default ProductBreadCrumb
