import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import CustomSelector from "./CustomSelector";

const ProductFilters = () => {
const [category, setCategory] = useState("All Categories");
const [sort, setSort] = useState("Featured");
  return (
    <section
     style={{marginTop:"2.5rem" ,padding:"1.25rem"}} 
     className=" border border-white/20  rounded-3xl">

      <div className="flex gap-4">

        {/* Search */}

        <div className="flex-1 relative">

          <FiSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 text-xl"
          />

          <input
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
        "Electronics",
        "Clothing",
        "Furniture",
        "Sports",
      ]}
      selected={category}
      setSelected={setCategory}
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
