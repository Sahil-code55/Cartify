import React from 'react'

const ShopHeader = ({totalProducts}) => {
  return (
    <section style={{marginBottom:"20px", marginTop:"30px"}} >
      <h2 className="text-5xl  text-white">
        All Products
      </h2>

      <span style={{marginTop:"2px"}} className="text-zinc-500 text-md ">
        {totalProducts} products found
      </span>
    </section>
  )
}

export default ShopHeader
