// import { products } from "../data/products";
import { useContext } from "react";
import ShopCard from "./ShopCard";
import { ShopProductContext } from "../context/ProductContext";

const ProductGrid = () => {
 let {shopProductData} = useContext(ShopProductContext)
  return (
    <section
     style={{marginTop:"20px",marginBottom:"20px"}}
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">

      {shopProductData.map((product) => (
        <ShopCard
          key={product.id}

          product={product}
        />
      ))}

    </section>
  );
};

export default ProductGrid;