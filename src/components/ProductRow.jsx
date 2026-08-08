import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductRow = ({ product }) => {

 const { addToCart } = useCart();
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

      <button
        onClick={() => addToCart(product)}
       className="h-12 w-12 rounded-xl bg-[#0051ff14] flex items-center flex-shrink-0 justify-center hover:bg-[#0037ad47] cursor-pointer active:scale-96 ">

        <FaShoppingBag className="text-[#3973f0]"/>

      </button>

    </div>

  );
};

export default ProductRow;