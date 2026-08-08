import React, { useContext } from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import StatCard from '../components/StatCard';
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";
import { FaBolt, FaDollarSign, FaShieldAlt,  FaTag } from 'react-icons/fa';
import ProductList from "../components/ProductList";
import { ShopProductContext } from '../context/ProductContext';
import { FaBox, FaIndianRupeeSign, FaStar, FaTags,} from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { get } from 'react-hook-form';
import { useCart } from "../context/CartContext";

const Home = () => {
 let  {shopProductData }= useContext(ShopProductContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const { cart, totalAmount } = useCart();

const topRated = shopProductData.filter((item) => item.rating.rate >= 4.5);
const newArrivals = shopProductData.slice(0, 5);


const getGreeting = () => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 22) {
    return "Good Evening";
  } else {
    return "Good Night"; 
  }
};

  return (
<div className="page home-page min-h-screen overflow-hidden  bg-[#111]  bg-[length:40px_40px]
    bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" 

  >
    <div className="hero-section flex items-center justify-between text-center text-white border-2 border-[#797A7C] overflow-hidden relative">
      
        <div
       className="hero-main-left  flex flex-col items-start gap-3">
      <div className="greeting flex justify-center items-center text-xl   gap-2">
        <h2 className="">{getGreeting()}</h2>  
            <MdOutlineWavingHand />
       </div>
       <div className="welcome-section text-start"> 
       <h2 className="text-6xl">Welcome back,</h2>
       <h2 className="welcome-section-user text-5xl">{user?.fullName}</h2>
       </div>
       <p className="text-[#6D6C6D] text-start">
        Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.
       </p>
          <div className="button-section  flex items-center justify-center  gap-3">
        <button
         onClick={()=>{ navigate("/shop")}}
         className="  shop-btn  flex items-center justify-center border-0  cursor-pointer  text-[#1e1a1a]  text-md rounded-2xl gap-2 active:cursor-progress ">Shop Now <IoMdArrowForward /> </button>

        <button  
        onClick={()=>{ navigate("/shop")}}
        className=" product-btn bg-transparent border-1 border-[#908f8f] cursor-pointer border-0  text-[#908f8f]  text-sm rounded-2xl hover:border-[white] hover:text-white active:cursor-progress " >View All Products</button>
       </div>
       </div>
        <div
        style={{paddingBottom:"3rem"}}
       className="hero-main-right flex flex-col gap-4 items-end justify-end   h-100 w-1/2 ">

      

      {/* Products Available */}
      <div
        className="h-28 w-48 rounded-2xl border border-blue-400/30
        bg-blue-400/10 flex flex-col items-center justify-center"
      >
        <h2 className="text-5xl font-bold text-blue-400">
          20+
        </h2>

        <p className="mt-1 text-zinc-400 text-sm">
          Products Available
        </p>
      </div>

      {/* Free Delivery */}
      <div
        className="h-28 w-48 rounded-2xl border border-white/70
        bg-transparent flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl font-semibold text-white">
          Free
        </h2>

        <p className="mt-1 text-zinc-500 text-sm">
          Delivery on ₹999+
        </p>
      </div>

   

       

       </div>
    
      </div>

<section className="grid grid-cols-4 gap-6 mt-10">
  <StatCard
    icon={<FaBox />}
    value={cart.length}
    title="Cart Items"
    subtitle="In your bag"
    iconBg="rgba(190,242,100,.12)"
    iconColor="#BEF264"
  />

  <StatCard
    icon={<FaDollarSign />}
    value={`$${totalAmount.toFixed(2)}`}
    title="Cart Value"
    subtitle="Ready to checkout"
    iconBg="rgba(96,165,250,.12)"
    iconColor="#60A5FA"
  />

  <StatCard
    icon={<FaStar />}
    value="5"
    title="Top Products"
    subtitle="Highly rated"
    iconBg="rgba(251,191,36,.12)"
    iconColor="#FBBF24"
  />

  <StatCard
    icon={<FaTags />}
    value="6"
    title="Categories"
    subtitle="To explore"
    iconBg="rgba(192,132,252,.12)"
    iconColor="#C084FC"
  />
</section>


{/* categories section */}
 <div className="category-tittle  flex items-center justify-between">
    <h2 className="text-white text-2xl"> Shop by Category</h2>
    <div className="view-all flex items-center justify-center gap-1">
    <span onClick={() =>{
       navigate("/shop")}} >View All</span>
     < IoMdArrowForward/>
    </div>
  </div>
<div className="categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
 
  {categories.map((category) => (
    <CategoryCard
      key={category.id}
      icon={category.icon}
      title={category.title}
      category={category.category}
       items={
      shopProductData.filter(
        (product) => product.category === category.category
      ).length
    }
    />
  ))}
</div>

{/* top product */}

    <section className="top-product-parent grid grid-cols-1 lg:grid-cols-2 gap-8 ">
      <ProductList
        title="Top Rated"
         icon={<FaStar />}
        products={topRated}
      />

      <ProductList
        title="New Arrivals"
          icon={<FaBolt />}
        products={newArrivals}
      />
    </section>


    <section  className="tags-parent flex items-center justify-between gap-5  ">
<div style={{padding: "10px 80px"}} className="tags  flex  items-center  gap-5  rounded-3xl  border  border-white/30 border-2  bg-transparent   hover:border-lime-400/50  transition-all  duration-300"> 

   <div className="text-3xl text-lime-400">
        <FaBolt />
      </div>

      <div>
        <h3 className="text-md font-semibold text-white">
          Fast Delivery
        </h3>

        <span className="text-zinc-500 text-sm ">
         Same-day on select items
        </span>
      </div>
      </div>


<div  style={{padding: "10px 80px"}} className="tags  flex  items-center  gap-5  rounded-3xl  border  border-white/30 border-2  bg-transparent  px-8  py-8  hover:border-blue-400/50  transition-all  duration-300"> 

   <div className="text-3xl text-blue-400">
         <FaShieldAlt />
      </div>

      <div>
        <h3 className="text-md font-semibold text-white">
          Secure Payments
        </h3>

        <span className="text-zinc-500 text-sm ">
         100% encrypted checkout
        </span>
      </div>
      </div>


<div style={{padding: "10px 80px"}} className="tags  flex  items-center  gap-5  rounded-3xl  border  border-white/30 border-2  bg-transparent  px-8  py-8  hover:border-green-400/50  transition-all  duration-300"> 

   <div className="text-3xl text-green-400">
        <FaTag />
      </div>

      <div>
        <h3 className="text-md font-semibold text-white">
        Best Prices
        </h3>

        <span className="text-zinc-500 text-sm ">
        Price-match guarantee
        </span>
      </div>
      </div>
</section>



</div>
  
  )
}

export default Home
