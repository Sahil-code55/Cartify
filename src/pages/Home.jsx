// import { products } from '../data/products';
// import { categories } from '../data/categories';
// import ProductCard from '../components/ProductCard';
// import CategoryCard from '../components/CategoryCard';

// export default function Home({ setCurrentPage }) {
//   // Show first 3 products as featured
//   const featuredProducts = products.slice(0, 3);

//   return (
//     <div className="page home-page">
//       <div className="hero-section">
//         <h1>Summer Collection 2026</h1>
//         <p>Discover premium products crafted with exceptional design, modern aesthetics, and ultimate functionality.</p>
//         <button className="btn btn-primary" onClick={() => setCurrentPage('shop')}>
//           Shop Now
//         </button>
//       </div>

//       <h2 className="featured-title">Shop by Category</h2>
//       <div className="grid-categories">
//         {categories.map((category) => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </div>

//       <h2 className="featured-title">Featured Products</h2>
//       <div className="grid-products">
//         {featuredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import StatCard from '../components/StatCard';
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";
import { FaBolt, FaShieldAlt, FaStar, FaTag } from 'react-icons/fa';
import ProductList from "../components/ProductList";
import { products } from "../data/products";

const Home = () => {

const topRated = products.filter((item) => item.rating >= 4.5);
const newArrivals = products.slice(0, 5);

  return (
<div className="page home-page min-h-screen overflow-hidden  bg-[#111]  bg-[length:40px_40px]
    bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" 
  // style={{
  //   backgroundColor: "#111",
  //   backgroundImage: `
  //     linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
  //     linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
  //   `,
  //   backgroundSize: "40px 40px",
  // }}
  >
    <div className="hero-section flex text-center text-white border-2 border-[#797A7C] overflow-hidden relative">
        {/* <h1>Summer Collection 2026</h1>
        <p>Discover premium products crafted with exceptional design, modern aesthetics, and ultimate functionality.</p>
        <button className="btn btn-primary" onClick={() => setCurrentPage('shop')}>
          Shop Now
        </button> */}
        <div
       className="hero-main-left  flex flex-col items-start gap-3">
      <div className="greeting flex justify-center items-center   gap-2">
        <h2 className="">GOOD AFTERNOON </h2>  
            <MdOutlineWavingHand />
       </div>
       <div className="welcome-section text-start">
       <h2 className="text-6xl">Welcome back,</h2>
       <h2 className="welcome-section-user text-5xl">SAHIL!</h2>
       </div>
       <p className="text-[#6D6C6D] text-start">
        Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.
       </p>
          <div className="button-section  flex items-center justify-center  gap-3">
        <button className="  shop-btn  flex items-center justify-center border-0  cursor-pointer  text-[#1e1a1a]  text-md rounded-2xl gap-2 active:cursor-progress ">Shop Now <IoMdArrowForward /> </button>
        <button className=" product-btn bg-transparent border-1 border-[#908f8f] cursor-pointer border-0  text-[#908f8f]  text-sm rounded-2xl hover:border-[white] hover:text-white active:cursor-progress " >View All Products</button>
       </div>
       </div>
        <div
       className="hero-main-right ">
       

       </div>
    
      </div>

<section className="grid grid-cols-4 gap-6 mt-10">
  <StatCard />
  <StatCard />
  <StatCard />
  <StatCard />
</section>


{/* categories section */}
 <div className="category-tittle  flex items-center justify-between">
    <h2 className="text-white text-2xl"> Shop by Category</h2>
    <div className="view-all flex items-center justify-center gap-1">
    <span>View All</span>
     < IoMdArrowForward/>
    </div>
  </div>
<div className="categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
 
  {categories.map((category) => (
    <CategoryCard
      key={category.id}
      icon={category.icon}
      title={category.title}
      items={category.items}
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
