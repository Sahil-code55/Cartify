// export const categories = [
//   { id: 1, name: "Electronics" },
//   { id: 2, name: "Apparel" },
//   { id: 3, name: "Home & Kitchen" },
//   { id: 4, name: "Books" }
// ];
import { FaLaptop, FaHome } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { GiClothes, GiSoccerBall } from "react-icons/gi";

export const categories = [
  {
    id: 1,
    title: "Electronics",
    items: 17,
    icon: <FaLaptop />,
  },
  {
    id: 2,
    title: "Clothing",
    items: 2,
    icon: <GiClothes />,
  },
  {
    id: 3,
    title: "Furniture",
    items: 3,
    icon: <MdChair />,
  },
  {
    id: 4,
    title: "Home",
    items: 14,
    icon: <FaHome />,
  },
  {
    id: 5,
    title: "Sports",
    items: 8,
    icon: <GiSoccerBall />,
  },
];