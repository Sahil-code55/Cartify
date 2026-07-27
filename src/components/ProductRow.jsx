import { FaShoppingBag } from "react-icons/fa";

const ProductRow = ({ product }) => {
  return (

    <div className=" product-row flex items-center justify-between border border-zinc-200 rounded-3xl ">

      <div className="flex items-center gap-5">

        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 object-contain flex-shrink-0"
        />

        <div>

          <h3 className="font-semibold line-clamp-2 leading-6">
            {product.title}
          </h3>

          <p className="text-lime-500 font-bold">
            ${product.price}
          </p>

        </div>

      </div>

      <button className="h-12 w-12 rounded-xl bg-[#0051ff14] flex items-center justify-center">

        <FaShoppingBag className="text-[#3973f0]"/>

      </button>

    </div>

  );
};

export default ProductRow;