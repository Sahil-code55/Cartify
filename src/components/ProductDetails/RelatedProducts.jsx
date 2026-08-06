import React, { useContext } from "react";
import { ShopProductContext } from "../../context/ProductContext";
import ShopCard from "../ShopCard";

const RelatedProducts = ({ product  }) => {
  const { shopProductData } = useContext(ShopProductContext);

  // Safety Check
  if (!product) {
    return <h1 className="text-white">Loading...</h1>;
  }

  // Same category except current product
  const relatedProducts = shopProductData
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 5);

  return (
    <section
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
      className="w-full"
    >
      {/* Heading */}
      <h2
        style={{ marginBottom: "2rem" }}
        className="text-4xl font-bold text-white"
      >
        Related Products
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-5 gap-6">
        {relatedProducts.map((item) => (
          <ShopCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;