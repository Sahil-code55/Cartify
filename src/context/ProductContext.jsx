

import { createContext, useEffect, useState } from "react";
import { getProductData } from "../data/products";


export const ShopProductContext = createContext();


export const ShopProductContextProvider =({children})=>{
    const [shopProductData, setShopProductData] = useState([]);

    useEffect(()=>{
        const fetchProduct = async()=>{
            const data = await getProductData()
            setShopProductData(data)
        }
    fetchProduct();
    },[])

    return(
       < ShopProductContext.Provider value ={{shopProductData , setShopProductData}}> 
       
       {children} </ShopProductContext.Provider>
    )
}