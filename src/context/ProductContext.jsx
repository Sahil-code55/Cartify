import { createContext, useEffect, useState } from "react";
import { getProductData } from "../data/products";

export const ShopProductContext = createContext();
export const ShopProductContextProvider =({children})=>{

    const [shopProductData, setShopProductData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [sort, setSort] = useState("Featured");
    



const filteredProducts = shopProductData.filter((product) =>{
  // Search filter
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  
//    Category filter
  const matchesCategory = selectedCategory === "All Categories" ||
    product.category.toLowerCase() === selectedCategory.toLowerCase();

// Price filter
  const matchesPrice = sort  === "Price Low to High"
    ? true
    : sort === "Price High to Low"
    ? true
    : sort === "Rating"
    ? true
    : true;


    return matchesSearch && matchesCategory && matchesPrice;


})

    useEffect(()=>{
        const fetchProduct = async()=>{
            const data = await getProductData()
            setShopProductData(data)
        }
    fetchProduct();
    },[])

    return(
       < ShopProductContext.Provider value ={{shopProductData , selectedCategory, setSelectedCategory, sort, setSort,  searchTerm, filteredProducts,
    setSearchTerm,}}> 
       
       {children} </ShopProductContext.Provider>
    )
}