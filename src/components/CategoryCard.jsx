
import React from "react";

const CategoryCard = ({ icon, title, items }) => {
  return (
    <div
    className=" bg-white rounded-3xl h-34 flex flex-col items-center justify-center gap-3 transition-all duration-300  hover:-translate-y-1 hover:shadow-xl  cursor-pointer">
      <div className="text-4xl">{icon}</div>

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