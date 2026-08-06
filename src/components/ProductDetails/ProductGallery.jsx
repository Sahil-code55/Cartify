import React from 'react'

const ProductGallery = ({ product }) => {
  return (
    <div
   style={{ padding: "2rem" }} 
     className="h-122 w-[45%] flex gap-4 bg-white rounded-[30px]  ">
     <img src={product.image} alt={product.title} className="h-full w-full object-contain  "/>

    </div>
  )
}

export default ProductGallery