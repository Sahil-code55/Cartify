
import React, { useContext } from 'react'
import { Package, Users, Star, Truck,  } from 'lucide-react';
import { MdArrowForward } from "react-icons/md";
// import { CheckAuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
const Login = () => {
     // Metrics Data
  const metrics = [
    { id: 1, value: '20K+', label: 'Products', icon: <Package className="w-5 h-5 text-primary" /> },
    { id: 2, value: '50K+', label: 'Users', icon: <Users className="w-5 h-5 text-primary" /> },
    { id: 3, value: '4.9', label: 'Rating', icon: <Star className="w-5 h-5 text-primary fill-primary" /> },
  ];

//   let {user ,SetUser } = useContext(checkAuthContext);

//   let {register , handleSubmit ,reset ,formState:{errors}} =useForm({mode:"onChange"});

  let formSubmit =(data)=>{
    const logUser = {
        id: Date.now(),
        ...data
    }
    console.log(data);
  }
   
//     let arr =[...user , logUser]
//     SetUser(arr)
//     reset();
//   }

//  let {register,handleSubmit,reset,formState:{errors}}=useForm({
//     mode:"onChange",
//   defaultValues:updateUser,

//  });

//   console.log(errors);
  
   
//     let formSubmit =(data)=>{
//       const newUser ={
//         id : Date.now(),
//         ...data,
//       }
//     if(updateUser){
//      setUser((prev)=>{
//       return prev.map((val)=>{
//          return val.id === updateUser.id ? {...newUser}: val;
        
//       })
//      })
//     }
//       else{
//       let arr = [...user ,newUser]
//       setUser(arr)
//       localStorage.setItem("users",JSON.stringify(arr));
//     }
//     reset();
//     setToggle((prev)=>!prev)
//     }






//   let {user , setUser } = useContext(checkAuthContext);

  return (

<div className= "grid grid-cols-2 h-screen w-screen bg-white gap-[0.8px] overflow-hidden ">

  {/* Left side  */}
  <div 
        style={{paddingTop:"2.5rem",paddingLeft:"2.5rem"}}
        className="  bg-[#191919]">

    {/* header logo */}
            <div  className="navbar-logo flex items-center cursor-pointer justify-self-start">
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

     
    {/* <form 
      onSubmit={handleSubmit(formSubmit)}
      className=" w-100 rounded-xl flex flex-col items-start justify-start text-start gap-4 bg-black border-3 border-amber-100 py-5 px-3" >


    <input
    {...register("name" ,{
      required : "name is required"
    })}

     className= "p-2  text-white border-1 border-amber-100 w-full outline-0 rounded-2xl " 
     type="text"
     placeholder=" Enter  name" 
     />
    { errors.name && <p className="text-red-700 text-start text-md">{errors.name.message}</p>}

    <input
    {...register("email"  ,{
      required : "email is required",
      pattern:{
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message:"please enter valid email"
      }
    })}

     className= "p-2  text-white border-1 border-amber-100 w-full outline-0 rounded-2xl " 
     type="email"
      placeholder=" Enter Email" 
      />
    {   errors.email && < p className="text-red-700 text-start text-md">{errors.email.message}</p>}

    <input
    {...register("mobile" ,{
      required : "name is required",
      minLength:{
        value: 10,
        message:"minimum 10 digit required"
      },
        maxLength:{
        value: 10,
        message:"maximum 10 digit required"
      }
    })}

     className= "p-2  text-white border-1 border-amber-100 w-full outline-0 rounded-2xl " 
     type="number"
      placeholder=" Enter Mobile number"
       />
      {  errors.mobile && <p className="text-red-700 text-start text-md">{errors.mobile.message}</p>}

    <input
    {...register("Image" ,{
      required : "name is required"
    })}

     className= "p-2 text-white  border-1 border-amber-100 w-full outline-0 rounded-2xl "
      type="url" 
      placeholder=" Enter Image Url"
       />
     {  errors.Image &&  <p className="text-red-700 text-start text-md">{errors.Image.message}</p>}  

    <button 
    type="submit"
     className=" bg-blue-500 rounded-4xl py-2 w-full text-white"
     >Add User</button>
      </form> */}


   <form 
   style={{paddingTop:"0.98rem",paddingBottom:"0.98rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}}
   className="h-90 w-110 rounded-3xl flex flex-col gap-7 border-2 border-[#1D1D1D]  bg-[#111111]" >

    {/* top text */}
    <div className="top">
      
    <h1 className="text-3xl text-white">Sign in</h1>
    <p style={{marginTop:"0.25rem"}} className="text-gray-700">Enter your credentials to continue</p>
    </div>

   {/* middle form */}
   <div  className=" flex flex-col gap-4 ">

    <input
    style={{paddingLeft:"1rem"}}
    className="bg-[#1D1D1D] h-12 w-full text-gray-400 rounded-xl outline-0 border-0 hover:border-1 border-blue-400"
     type="email" placeholder="Email address" />

    <input
      style={{paddingLeft:"1rem"}}
       className="bg-[#1D1D1D] h-12 w-full text-gray-400 rounded-xl  outline-0 border-0 hover:border-1 border-blue-400"
     type="password" placeholder="password" />
   </div>

   <button  className="login-btn flex items-center justify-center gap-2 w-full h-12 text-white text-xl  rounded-2xl transition-transform duration-200 ease-linear active:-translate-y-[-2px] ">Sign in <MdArrowForward/> </button>

   <p className="text-gray-500 text-center">Don't have an account? <span className="login-left-middle-h2 "> <NavLink to="/register">Create one</NavLink></span></p>
   </form>


  </div>
      
</div>
  )
}

export default Login
