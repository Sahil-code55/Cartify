import React from 'react'
import { useParams } from 'react-router-dom';
import ProductBreadCrumb from './ProductBreadCrumb';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

const ProductDetails = () => {
  const { id } = useParams()

  return (
    <div  
    style={{padding:"1.6rem 10rem"}}
     className=" min-h-screen overflow-hidden  bg-[#111]  bg-[length:40px_40px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]">
    
    <ProductBreadCrumb category="Electronics" title="Smartphone" />
    <div  className="flex gap-10  h-135 w-full  ">
       <ProductGallery /> 
       <ProductInfo /> 
    </div>


    </div>
  )
}

export default ProductDetails