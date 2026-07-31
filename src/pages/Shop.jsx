import React, { useContext } from 'react'
import ShopCard  from "../components/ShopCard"
import ShopProductFilter from '../components/ShopProductFilter';
import ShopProductGrid from '../components/ShopProductgrid';
import { ShopProductContext } from '../context/ProductContext';
// import { products } from '../data/products';

const Shop = () => {
  let {shopProductData} = useContext(ShopProductContext);
  return (
    <div
    className="page shop-page min-h-screen overflow-hidden  bg-[#111]  bg-[length:40px_40px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]">
      
      
      <section style={{marginBottom:"1rem", marginTop:"50px"}} >
      <h2 className="shop-header text-4xl  text-white">
        All Products
      </h2>

      <span style={{marginTop:"2px"}} className="text-zinc-500 text-md ">
        {shopProductData.length} products found
      </span>
    </section>

      <ShopProductFilter/>
      <ShopProductGrid/>
      <ShopCard/>
      
    </div>
  )
}

export default Shop
