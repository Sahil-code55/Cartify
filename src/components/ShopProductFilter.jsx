import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import CustomSelector from "./CustomSelector";
import { useContext, useState } from "react";
import { ShopProductContext } from "../context/ProductContext";


const ProductFilters = () => {

const { searchTerm, setSearchTerm , selectedCategory, setSelectedCategory, sort, setSort} = useContext(ShopProductContext);


const searchHandler = (e) => {
   setSearchTerm(e.target.value);
  
}

  return (
    <section
     style={{padding:"1.25rem"}} 
     className=" border border-white/20  rounded-3xl">
      <div className="flex gap-4">

        {/* Search */}
        <div className="flex-1 relative">

        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 text-xl"/>

          <input
          value={searchTerm}
          onChange={searchHandler}
            type="text"
            placeholder="Search products..."
            style={{paddingLeft:"3.5rem",paddingRight:"1rem"}}
            className=" w-full h-14 rounded-2xl bg-zinc-900 border border-white/10 
             text-white outline-none focus:border-[#38BDF8] transition-all hover:border-[#38BDF8]"
          />

        </div>

 {/* Category */}
     <CustomSelector
      options={[
         "All Categories",
         "electronics",
         "men's clothing",
         "women's clothing",
        "jewelery",
      ]}
      selected={selectedCategory}
      setSelected={setSelectedCategory}
    />


   {/* Sort */}
    <CustomSelector
      options={[
        "Featured",
        "Price Low to High",
        "Price High to Low",
        "Rating",
      ]}
      selected={sort}
      setSelected={setSort}
    />
    
      </div>
    </section>
  );
};

export default ProductFilters;
