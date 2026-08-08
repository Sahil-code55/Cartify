import { FaLaptop, FaHome } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { GiClothes, GiSoccerBall } from "react-icons/gi";
import { BiFemale } from "react-icons/bi";
import { FaMale } from "react-icons/fa";
import { RiJewelryFill } from "react-icons/ri";
export const categories = [
  {
    id: 1,
    title: "Electronics",
    category: "electronics",
    icon: <FaLaptop />,
  },
  {
    id: 2,
    title: "Women's Clothing",
    category: "women's clothing",
    icon: <BiFemale />,
  },
  {
    id: 3,
    title: "Men's Clothing",
    category: "men's clothing",
    icon: < FaMale/>,
  },
  {
    id: 4,
    title: "Jewelrys",
    category: "jewelery",
    icon: <RiJewelryFill />,
  }

];