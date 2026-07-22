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
