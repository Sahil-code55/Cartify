import { FaArrowRight, FaStar } from "react-icons/fa";
import ProductRow from "./ProductRow";

const ProductList = ({ title, products }) => {
  return (
    <div className="top-product h-100 bg-white rounded-[32px] ">

      {/* Header */}

      <div className="top-product-header flex justify-between items-center ">
        <div className="flex items-center gap-3">

          <FaStar className="text-yellow-500 text-xl"/>

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

        </div>

        <button
         className="top-product-seeAllBtn flex items-center gap-2 text- font-semibold ">
          See All
          <FaArrowRight className="text-blue-600"/>
        </button>
      </div>

      {/* Products */}

      <div className="space-y-5 flex flex-col gap-3">

        {products.map(product=>(
          <ProductRow
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
};

export default ProductList;