import { createContext, useEffect, useState } from "react";
import { getProductData } from "../data/products";

export const ShopProductContext = createContext();
export const ShopProductContextProvider =({children})=>{

    const [shopProductData, setShopProductData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [sortOption, setSortOption] = useState("Featured");
    



let filteredProducts = shopProductData.filter((product) =>{
  // Search filter
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  
//    Category filter
  const matchesCategory = selectedCategory === "All Categories" ||
    product.category.toLowerCase() === selectedCategory.toLowerCase();

// const matchesCategory =
//   selectedCategory === "All Categories" ||
//   (
//     typeof selectedCategory === "string" &&
//     product.category.toLowerCase() === selectedCategory.toLowerCase()
//   );

    return matchesSearch && matchesCategory ;


})

switch (sortOption) {
  case "Price Low to High":
    filteredProducts.sort((a, b) => a.price - b.price);
    break;

  case "Price High to Low":
    filteredProducts.sort((a, b) => b.price - a.price);
    break;

  case "Rating":
    filteredProducts.sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
    break;

  default:
    break;
}





    useEffect(()=>{
        const fetchProduct = async()=>{
            const data = await getProductData()
            setShopProductData(data)
        }
    fetchProduct();
    },[])

    return(
       < ShopProductContext.Provider value ={{shopProductData , selectedCategory, setSelectedCategory, sortOption, setSortOption,  searchTerm, filteredProducts,
    setSearchTerm,}}> 
       
       {children} </ShopProductContext.Provider>
    )
}