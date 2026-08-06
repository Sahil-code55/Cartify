import ProductBreadCrumb from './ProductBreadCrumb';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopProductContext } from "../../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams()
  const { shopProductData } = useContext(ShopProductContext)

 const product = shopProductData.find(
    item => item.id === Number(id)
);

if (!product) {
    return <h1 className="text-white">Loading...</h1>;
}

const currentIndex = shopProductData.findIndex(
    (item) => item.id === Number(id)
);

const previousProduct =
    currentIndex > 0
        ? shopProductData[currentIndex - 1]
        : null;

const nextProduct =
    currentIndex < shopProductData.length - 1
        ? shopProductData[currentIndex + 1]
        : null;

  return (
    <div  
    style={{padding:"1.6rem 10rem"}}
     className=" min-h-screen overflow-hidden  bg-[#111]  bg-[length:40px_40px] bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]">
    
    <ProductBreadCrumb  product={product}  category={product.category} title={product.title} />
    <div  className="flex gap-10   w-full  ">
       <ProductGallery  product={product} /> 
       <ProductInfo  product={product}  previousProduct={previousProduct} nextProduct={nextProduct}/> 
    </div>
    < RelatedProducts   product={product}/>


    </div>
  )
}

export default ProductDetails