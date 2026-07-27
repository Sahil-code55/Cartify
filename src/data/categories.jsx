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
    items: 17,
    icon: <FaLaptop />,
  },
  {
    id: 2,
    title: "Female Clothing",
    items: 2,
    icon: <BiFemale />,
  },
  {
    id: 3,
    title: "Male Clothing",
    items: 3,
    icon: < FaMale/>,
  },
  {
    id: 4,
    title: "Jewelrys",
    items: 14,
    icon: <RiJewelryFill />,
  }

];