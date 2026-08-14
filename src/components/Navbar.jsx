import React, { useEffect, useState  } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useToast } from '../context/ToastContext';



  const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  
  const { user ,logout } = useContext(AuthContext);
const { showToast } = useToast();
  


    // Get cart data
  const { cart, openCart } = useCart();

  // Calculate total quantity
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );




  useEffect(()=>{
  const handleScroll = () =>{
  //checking user scroll
  if(window.scrollY >0){
  setIsScrolled(true);
  }else{
    setIsScrolled(false);
  } 
  };

   //add scroll listener when component mount
  window.addEventListener("scroll",handleScroll)

  //clean uo listener when component unmounts to prevent memory leaks
  return()=>{
  window.removeEventListener("scroll", handleScroll)
  };


  },[])

  return (
 <nav 
 className= {` navbar  sticky top-0 z-50 h-20 w-full  bg-[#0E0E0E] grid grid-cols-[1fr_auto_1fr] items-center  transition-all duration-300 

   ${isScrolled ?"border-b border-gray-200 shadow-sm ": "border-b border-transparent"}`}>

  {/* NavBar Logo */}
     <div  className="navbar-logo flex items-center cursor-pointer justify-self-start" 
     onClick={() => navigate("/home")}>
  <svg className="h-8 w-16" width="240" height="160" viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cartGradient" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>

  {/* Speed Line 1 (Middle Left) --> */}
  <path d="M 15 50 H 85" stroke="url(#cartGradient)" stroke-width="16" stroke-linecap="round" />

  {/* <!-- Speed Line 2 (Bottom Left) --> */}
  <path d="M 40 80 H 115" stroke="url(#cartGradient)" stroke-width="16" stroke-linecap="round" />

  {/* <!-- Main Cart Basket and Top Tail --> */}
  <path d="M 55 20 
           H 105 
           Q 115 20 115 35 
           Q 115 50 130 50 
           H 210 
           C 225 50 230 60 226 73 
           L 204 113 
           C 199 123 190 130 178 130 
           H 85 
           C 74 130 65 121 65 110" 
        stroke="url(#cartGradient)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" fill="none" />


  {/* <!-- Wheels --> */}
  <circle cx="105" cy="151" r="13" fill="url(#cartGradient)" />
  <circle cx="170" cy="151" r="13" fill="url(#cartGradient)" />
</svg>
     <h1 className="tracking-normal text-3xl text-white font-medium tracking-wide">Cart<span >ify</span></h1>
      </div>
    
    {/* Navbar Links */}
    <div className="navbar-links flex justify-center gap-10 text-xl text-white">
    <NavLink className="nav-link-btn" to="/home">Home</NavLink>
    <NavLink className="nav-link-btn" to="/shop">Shop</NavLink>
    <NavLink className="nav-link-btn" to="/about">About</NavLink>
  
      </div>
     
      <div className="navbar-actions   flex items-center justify-self-end gap-4">

       <div 
      className="user   flex items-center justify-center gap-3 rounded-2xl  ">
        <div className="userlogo h-7 w-7  flex items-center justify-center border-0 rounded-sm " >
           <h1 className="text-md text-white"> {user?.fullName ? user.fullName.charAt(0).toUpperCase() : "U"} </h1> </div>
           
       <h1 className="text-white"> {user?.fullName || "User"}</h1>
      </div>



      <div
       className="cart-logo h-10 w-10 text-white flex items-center justify-center rounded-xl text-xl cursor-pointer relative"> 
        <button 
          onClick={openCart}>
          <IoCartOutline 
            className="cursor-pointer active:scale-10" />
        </button> 
        {/* Cart Badge */}
        {cartCount > 0 && (
          <span
            className="
              absolute -top-1.5 -right-1.5
              min-w-5 h-5
              px-1
              rounded-full
              bg-blue-400
              text-black
              text-[11px]
              font-bold
              flex items-center justify-center
            "
          >
            {cartCount}
          </span>
        )}
      </div>

      <div className=" nav-logout  h-10 w-10 text-white flex items-center justify-center  rounded-xl text-xl cursor-pointer  ">  <button onClick={()=>{
        if(confirm("Are you sure you want to Logout")){
          showToast("Logged out successfully 🚪");
        logout()}
      }}><MdLogout className="cursor-pointer hover:text-[#F87171] active:scale-10" /> </button>  </div>
       
      </div>

 </nav>
  )
}

export default Navbar
