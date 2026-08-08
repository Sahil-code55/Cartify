import { Package, Users, Star, Truck, LogOut,  } from 'lucide-react';
import { MdArrowForward } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useToast } from '../context/ToastContext';
const Login = () => {
     // Metrics Data
  const metrics = [
    { id: 1, value: '20K+', label: 'Products', icon: <Package className="w-5 h-5 text-primary" /> },
    { id: 2, value: '50K+', label: 'Users', icon: <Users className="w-5 h-5 text-primary" /> },
    { id: 3, value: '4.9', label: 'Rating', icon: <Star className="w-5 h-5 text-primary fill-primary" /> },
  ];

const navigate = useNavigate();
const { login } = useContext(AuthContext);

  let {register , handleSubmit ,reset ,formState:{errors}} =useForm({mode:"onChange"});
  const { showToast } = useToast();

  const onLoginSubmit =(data)=>{
  const usersData = JSON.parse(localStorage.getItem("users"))||[];

  if(usersData.length === 0){
    alert("No account found .please register first ")
    return
  }
   // check any user present in localstorage
  const user = usersData.find((user)=> user.email === data.email)

  if (!user) {
    console.error("Email is not registered.");
    return;
}

  if( user.password !== data.password ){
    console.error("Incorrect password.")
    return;
  }
    
    login(user);
    showToast("Login successful 🔐");
    navigate("/home");
  }
   


  return (

<div className= "grid grid-cols-2 h-screen w-screen bg-white gap-[0.8px] overflow-hidden ">

  {/* Left side  */}
  <div 
        style={{paddingTop:"2.5rem",paddingLeft:"2.5rem"}}
        className="  bg-[#121212]">

    {/* header logo */}
            <div  className="navbar-logo flex items-center cursor-pointer justify-self-start">
          <svg className="h-8 w-16" width="240" height="160" viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cartGradient" x1="0" y1="0" x2="240" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stopColor="#2563EB"/>
      <stop offset="100%" stopColor="#38BDF8"/>
    </linearGradient>
  </defs>

  {/* Speed Line 1 (Middle Left) --> */}
  <path d="M 15 50 H 85" stroke="url(#cartGradient)" strokeWidth="16" strokeLinecap="round" />

  {/* <!-- Speed Line 2 (Bottom Left) --> */}
  <path d="M 40 80 H 115" stroke="url(#cartGradient)" strokeWidth="16" strokeLinecap="round" />

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
        stroke="url(#cartGradient)" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none" />


  {/* <!-- Wheels --> */}
  <circle cx="105" cy="151" r="13" fill="url(#cartGradient)" />
  <circle cx="170" cy="151" r="13" fill="url(#cartGradient)" />
          </svg>
             <h1 className="tracking-normal text-3xl text-white font-medium tracking-wide">Cart<span >ify</span></h1>
              </div>


    {/* Middle Content */}
            <div
            style={{marginTop:"7rem",marginLeft:"1.25rem"}}
             className="login-left-middle flex flex-col items-start   justify-self-start gap-5">
            <h2 className="login-left-middle-h2 text-md font-semibold text-white font-sans">WELCOME BACK</h2>
            <h3   className="text-5xl text-white">Shop the future. <br />
             <span style={{marginTop:"0.64rem"}} className="login-left-middle-h2 text-5xl font-sans">Today.</span>
             </h3>
            <p className="text-gray-500">Thousands of products, lightning-fast delivery, and <br /> prices that make your wallet happy.</p>
            

            </div>

     {/* Bottom-section */}
             <div 
          style={{marginTop:"4rem",marginRight:"1.5rem"}}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 "
        >
          {metrics.map((metric) => (
            <div
              key={metric.id}
              style={{padding:"1.5rem"}}
              className="bg-bg-surface border border-gray-500 rounded-3xl  flex flex-col items-center text-center shadow-sm transition-all duration-300"
            >
              <div style={{marginBottom:"0.25rem"}} className=" bg-primary/5 rounded-radius-sm text-blue-700 ">
                {metric.icon}
              </div>
              <span style={{marginBottom:"0.10rem"}} className="text-md font-semibold text-gray-200 tracking-tight ">
                {metric.value}
              </span>
              <span className="text-sm font-medium text-gray-200">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

  </div>

        {/* Right side  */}
  <div className=" flex items-center justify-center bg-[#0D0D0D]">

     



   <form 
   onSubmit={handleSubmit(onLoginSubmit)}
   style={{paddingTop:"0.98rem",paddingBottom:"0.98rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}}
   className=" w-110 rounded-3xl flex flex-col  gap-7 border-2 border-[#1D1D1D]  bg-[#111111]" >

    {/* top text */}
    <div className="top">
      
    <h1 className="text-3xl text-white">Sign in</h1>
    <p style={{marginTop:"0.25rem"}} className="text-gray-700">Enter your credentials to continue</p>
    </div>

   {/* middle form */}
   <div  className=" flex flex-col gap-4 ">

         {/* Email Input */}
        <div className="relative flex flex-col items-center">
          <IoMailOutline className="absolute top-3.5 left-4 text-gray-500 text-xl" />
          <input 
            type="email" 
            placeholder="Email address" 
          style={{paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"3rem",paddingRight:"1rem"}}
            className="w-full bg-zinc-800 text-white   rounded-2xl outline-0 border-0 hover:border-1 border-blue-400 placeholder-gray-500"
             {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email",
              },
            })}
          />
            <p  style={{marginRight:"13rem"}}className="text-red-500   mt-1">
            {errors.email?.message}
          </p>
        </div>

           {/* Password Input */}
        <div className="relative flex  flex-col items-center">
          <IoLockClosedOutline className="absolute top-3.5  left-4 text-gray-500 text-xl" />
          <input 
            type="password" 
            placeholder="Password " 
          style={{paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"3rem",paddingRight:"1rem"}}
            className="w-full bg-zinc-800 text-white   rounded-2xl outline-0 border-0 hover:border-1 border-blue-400 placeholder-gray-500"
            {...register("password", {
              required: "Password required",
            
            })}
          />
           <p style={{marginRight:"13rem"}} className="text-red-500   mt-1">
            {errors.password?.message}
          </p>
        </div>
   </div>

   <button 
   type="submit"
    className="login-btn relative flex items-center justify-center gap-2 w-full h-12 text-white text-xl  rounded-2xl transition-transform duration-200 ease-linear hover:-translate-y-[1px] active:translate-y-[-1px]  active:cursor-progress bg-gradient-to-br from-[#2563EB] to-[#38BDF8] before:absolute before:top-1 before:left-0 before:w-full before:h-full before:-z-10 before:rounded-lg before:bg-gradient-to-br before:from-[#2563EB] before:to-[#38BDF8] before:blur-md before:opacity-40
     ">Sign in <MdArrowForward/> </button>

   <p className="text-gray-500 text-center">Don't have an account? <span className="login-left-middle-h2 "> <NavLink to="/register">Create one</NavLink></span></p>
   </form>


  </div>
      
</div>
  )
}

export default Login
