


import axios from "axios";
export const getProductData = async () => {
  try {
    let res = await axios.get("https://fakestoreapi.com/products");
    return res.data

  } catch (error) {
    console.log("error in api", error);
    return [];
  }
}
