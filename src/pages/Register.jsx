// export default function Register({ setCurrentPage }) {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-10 px-4">
//       {/* Logo Section */}
//       <div className="flex items-center gap-2.5 mb-8">
//         <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[var(--primary-gradient)] text-[var(--text-inverse)] shadow-sm">
//           {/* Lightning Bolt SVG Icon */}
//           <svg 
//             width="20" 
//             height="20" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2.5" 
//             strokeLinecap="round" 
//             strokeLinejoin="round"
//           >
//             <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//           </svg>
//         </div>
//         <span className="text-[1.6rem] font-semibold tracking-[-0.5px] text-[var(--text-main)]">
//           Cart<strong className="font-extrabold bg-[var(--primary-gradient)] bg-clip-text text-transparent">ify</strong>
//         </span>
//       </div>

//       {/* Register Form Card */}
//       <div className="w-full max-w-[440px] bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[var(--radius-lg)] p-10 shadow-md transition-shadow duration-[var(--transition-normal)] hover:shadow-lg">
//         <div className="mb-8 text-left">
//           <h2 className="text-[1.85rem] font-bold tracking-[-0.5px] text-[var(--text-main)] mb-2">Create account</h2>
//           <p className="text-[0.95rem] text-[var(--text-muted)]">Join Cartify and start shopping</p>
//         </div>

//         <form className="flex flex-col gap-4.5" onSubmit={(e) => e.preventDefault()}>
//           {/* Full Name Input */}
//           <div className="relative w-full flex items-center">
//             <span className="absolute left-[1.15rem] flex items-center justify-center text-[var(--text-muted)] pointer-events-none">
//               {/* User Icon */}
//               <svg 
//                 width="18" 
//                 height="18" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
//                 <circle cx="12" cy="7" r="4"/>
//               </svg>
//             </span>
//             <input 
//               type="text" 
//               className="w-full py-[0.9rem] pr-[1.15rem] pl-[2.85rem] text-[0.95rem] rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-main)] transition-all duration-[var(--transition-fast)] placeholder:text-[#94A3B8] placeholder:opacity-80 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--bg-surface)] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.12)]" 
//               placeholder="Full name" 
//               required 
//             />
//           </div>

//           {/* Email Address Input */}
//           <div className="relative w-full flex items-center">
//             <span className="absolute left-[1.15rem] flex items-center justify-center text-[var(--text-muted)] pointer-events-none">
//               {/* Mail Icon */}
//               <svg 
//                 width="18" 
//                 height="18" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <rect x="3" y="4" width="18" height="16" rx="2"/>
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//               </svg>
//             </span>
//             <input 
//               type="email" 
//               className="w-full py-[0.9rem] pr-[1.15rem] pl-[2.85rem] text-[0.95rem] rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-main)] transition-all duration-[var(--transition-fast)] placeholder:text-[#94A3B8] placeholder:opacity-80 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--bg-surface)] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.12)]" 
//               placeholder="Email address" 
//               required 
//             />
//           </div>

//           {/* Password Input */}
//           <div className="relative w-full flex items-center">
//             <span className="absolute left-[1.15rem] flex items-center justify-center text-[var(--text-muted)] pointer-events-none">
//               {/* Lock Icon */}
//               <svg 
//                 width="18" 
//                 height="18" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                 <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//               </svg>
//             </span>
//             <input 
//               type="password" 
//               className="w-full py-[0.9rem] pr-[2.85rem] pl-[2.85rem] text-[0.95rem] rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-main)] transition-all duration-[var(--transition-fast)] placeholder:text-[#94A3B8] placeholder:opacity-80 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--bg-surface)] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.12)]" 
//               placeholder="Password (min 6 chars)" 
//               required 
//             />
//             <span className="absolute right-[1.15rem] flex items-center justify-center text-[var(--text-muted)] cursor-pointer transition-colors duration-[var(--transition-fast)] hover:text-[var(--text-main)]">
//               {/* Eye Icon */}
//               <svg 
//                 width="18" 
//                 height="18" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
//                 <circle cx="12" cy="12" r="3"/>
//               </svg>
//             </span>
//           </div>

//           {/* Confirm Password Input */}
//           <div className="relative w-full flex items-center">
//             <span className="absolute left-[1.15rem] flex items-center justify-center text-[var(--text-muted)] pointer-events-none">
//               {/* Lock Icon */}
//               <svg 
//                 width="18" 
//                 height="18" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//               >
//                 <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                 <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//               </svg>
//             </span>
//             <input 
//               type="password" 
//               className="w-full py-[0.9rem] pr-[1.15rem] pl-[2.85rem] text-[0.95rem] rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-main)] transition-all duration-[var(--transition-fast)] placeholder:text-[#94A3B8] placeholder:opacity-80 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--bg-surface)] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.12)]" 
//               placeholder="Confirm password" 
//               required 
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="group w-full py-[0.95rem] mt-2 bg-[var(--primary-gradient)] text-[var(--text-inverse)] border-none rounded-[var(--radius-sm)] font-semibold text-[1rem] cursor-pointer shadow-[var(--shadow-primary)] flex items-center justify-center gap-2.5 transition-all duration-[var(--transition-fast)] hover:translate-y-[-2px] hover:shadow-[0_16px_28px_-8px_rgba(37,99,235,0.45)] active:translate-y-0">
//             Create Account
//             <svg 
//               width="18" 
//               height="18" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2.5" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="transition-transform duration-[var(--transition-fast)] group-hover:translate-x-[3px]"
//             >
//               <line x1="5" y1="12" x2="19" y2="12"/>
//               <polyline points="12 5 19 12 12 19"/>
//             </svg>
//           </button>
//         </form>

//         {/* Footer Link */}
//         <p className="text-center text-[0.95rem] text-[var(--text-muted)] mt-7">
//           Already have an account? <span className="text-[var(--primary)] font-semibold cursor-pointer transition-colors duration-[var(--transition-fast)] hover:underline hover:text-[var(--primary-dark)]" onClick={() => setCurrentPage('login')}>Sign in</span>
//         </p>
//       </div>
//     </div>
//   );
// }


import React from 'react'
import { useForm } from 'react-hook-form';
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {

   const { register, handleSubmit, watch, formState: { errors }} = useForm({
    mode:"onChange"
   });
      const navigate = useNavigate();

  const  onSubmit =(data)=>{
  // read existing user if any
    const users = JSON.parse(localStorage.getItem("users"))|| [];

  // checking duplicate email or email already present
  const userExists = users.find((user)=>user.email === data.email);

  if(userExists){
      alert("Email already exists.");
      return;
  }

  //removing confirmPassword before saving

  const {confirmPassword , ...newUser} = data;
  newUser.id = Date.now();
  users.push(newUser)

  localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/home");

  }




  return (
    <div className=" min-h-screen flex flex-col gap-3 items-center justify-center bg-[#0D0D0D]">
     
     {/* logo */}
       <div style={{marginRight:"1.7rem"}}  className="navbar-logo  flex items-center cursor-pointer justify-self-start" >
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
     
     <form
       onSubmit={handleSubmit(onSubmit)}
      style={{paddingTop:"0.98rem",paddingBottom:"0.98rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}}
   className=" w-110 rounded-3xl flex flex-col gap-4 border-2 border-[#1D1D1D]  bg-[#111111]"  >

    <div>
        <h1 className="text-3xl text-white">Create account</h1>
        <p className="text-gray-500">Join Cartify and start shopping</p>
    </div>

    {/* form input area */}

            {/* Full Name Input */}
        <div className="relative flex flex-col items-center">
          <IoPersonOutline className="absolute left-4 top-3 text-gray-500 text-xl" />
          <input 
            type="text" 
            placeholder="Full name" 
            style={{paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"3rem",paddingRight:"1rem"}}
            className="w-full bg-zinc-800 text-white  border-[#1D1D1D]    rounded-2xl outline-0 border-0 hover:border-1 border-blue-400 placeholder-gray-500"
              {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
         <p className="text-red-500 mt-1">
            {errors.fullName?.message}
          </p>
        </div>

     
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
            <p className="text-red-500 mt-1">
            {errors.email?.message}
          </p>
        </div>

           {/* Password Input */}
        <div className="relative flex  flex-col items-center">
          <IoLockClosedOutline className="absolute top-3.5  left-4 text-gray-500 text-xl" />
          <input 
            type="password" 
            placeholder="Password (min 6 chars)" 
          style={{paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"3rem",paddingRight:"1rem"}}
            className="w-full bg-zinc-800 text-white   rounded-2xl outline-0 border-0 hover:border-1 border-blue-400 placeholder-gray-500"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
           <p className="text-red-500 mt-1">
            {errors.password?.message}
          </p>
        </div>

        {/* confirm password */}
        <div className="relative flex flex-col items-center">
          <IoLockClosedOutline className="absolute top-3.5 left-4 text-gray-500 text-xl" />
          <input 
            type="password" 
            placeholder=" Confirm Password" 
          style={{paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"3rem",paddingRight:"1rem"}}
            className="w-full bg-zinc-800 text-white   rounded-2xl outline-0 border-0 hover:border-1 border-blue-400 placeholder-gray-500"
            {...register("confirmPassword", {
              required: "Confirm Password",
              validate: (value) =>
                value === watch("password") ||
                "Passwords do not match",
            })}
          />
            <p className="text-red-500 mt-1">
            {errors.confirmPassword?.message}
          </p>
        </div>
    

     <button 
    type="submit" 
    className="login-btn relative flex items-center justify-center gap-2 w-full h-12 text-white text-xl rounded-2xl transition-transform duration-200 ease-linear active:translate-y-[-1px] active:cursor-progress hover:-translate-y-[1px] bg-gradient-to-br from-[#2563EB] to-[#38BDF8] before:absolute before:top-1 before:left-0 before:w-full before:h-full before:-z-10 before:rounded-lg before:bg-gradient-to-br before:from-[#2563EB] before:to-[#38BDF8] before:blur-md before:opacity-40
    ">Create account <MdArrowForward/></button>

     <p className="text-gray-500 flex items-center justify-center gap-1 text-center">Don't have an account? 
     <span className="login-left-middle-h2 "> <NavLink to="/">Log in</NavLink></span>
    
       </p>
     
     </form>

     


    </div>
  )
}

export default Register
