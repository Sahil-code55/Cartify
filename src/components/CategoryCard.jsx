import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopProductContext } from "../context/ProductContext";


const CategoryCard = ({ icon, title, items,category }) => {
 
    const navigate = useNavigate();

  const { setSelectedCategory } = useContext(ShopProductContext);

  const handleCategoryClick = () => {
    setSelectedCategory(category);
    navigate("/shop");
  };


  return (
    <div
       onClick={handleCategoryClick}
    className=" bg-white rounded-3xl h-34 flex flex-col items-center
     justify-center gap-3 transition-all duration-300  hover:-translate-y-1
      hover:shadow-xl  cursor-pointer">
        
      <div className="text-3xl">{icon}</div>

      <h3 className="text-xl font-semibold text-zinc-800">
        {title}
      </h3>

      <p className="text-[20px] text-zinc-500">
        {items} Items
      </p>
    </div>
  );
};


export default CategoryCard;