import { products } from "../data/products";
import ShopCard from "./ShopCard";

const ProductGrid = () => {
  return (
    <section
     style={{marginTop:"20px"}}
     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">

      {products.map((product) => (
        <ShopCard
          key={product.id}
          product={product}
        />
      ))}

    </section>
  );
};

export default ProductGrid;