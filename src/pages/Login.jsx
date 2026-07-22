// export default function Login({ setCurrentPage }) {
//   return (
//     <div className="min-h-[calc(100vh-140px)] w-full grid grid-cols-1 md:grid-cols-2 rounded-[var(--radius-lg)] border border-[var(--border-color)] overflow-hidden bg-[var(--bg-surface)] shadow-md my-4">
//       {/* Left Column: Branding, Hero Content, Stats */}
//       <div className="flex flex-col justify-between p-8 md:p-12 bg-gradient-to-br from-[var(--bg-app)] to-[rgba(37,99,235,0.04)] border-r border-[var(--border-color)]">
//         {/* Top Logo */}
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
//           <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[var(--primary-gradient)] text-white shadow-sm">
//             <svg 
//               width="18" 
//               height="18" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2.5" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             >
//               <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//             </svg>
//           </div>
//           <span className="text-xl font-semibold text-[var(--text-main)] tracking-[-0.5px]">
//             Cart<strong className="font-extrabold bg-[var(--primary-gradient)] bg-clip-text text-transparent">ify</strong>
//           </span>
//         </div>

//         {/* Middle Hero Message */}
//         <div className="my-8 md:my-0">
//           <div className="text-[0.75rem] font-bold tracking-[0.15em] text-[var(--primary)] uppercase mb-3">
//             Welcome Back
//           </div>
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-1px] text-[var(--text-main)] leading-tight mb-4">
//             Shop the future.<br />
//             <span className="bg-[var(--primary-gradient)] bg-clip-text text-transparent">Today.</span>
//           </h1>
//           <p className="text-[var(--text-muted)] text-[0.95rem] max-w-sm leading-relaxed">
//             Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
//           </p>
//         </div>

//         {/* Bottom Stats */}
//         <div className="grid grid-cols-3 gap-3">
//           <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[var(--radius-sm)] p-3 text-center transition-all duration-300 hover:shadow-sm">
//             <div className="text-[1.2rem] font-bold text-[var(--primary)]">20K+</div>
//             <div className="text-[0.7rem] font-semibold text-[var(--text-muted)] mt-0.5 uppercase tracking-wider">Products</div>
//           </div>
//           <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[var(--radius-sm)] p-3 text-center transition-all duration-300 hover:shadow-sm">
//             <div className="text-[1.2rem] font-bold text-[var(--primary)]">50K+</div>
//             <div className="text-[0.7rem] font-semibold text-[var(--text-muted)] mt-0.5 uppercase tracking-wider">Users</div>
//           </div>
//           <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[var(--radius-sm)] p-3 text-center transition-all duration-300 hover:shadow-sm flex flex-col justify-center items-center">
//             <div className="flex items-center gap-0.5 text-[1.2rem] font-bold text-[var(--primary)]">
//               4.9
//               <svg 
//                 className="w-4 h-4 text-amber-500 fill-amber-500 pb-0.5" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor" 
//                 strokeWidth="1"
//               >
//                 <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//               </svg>
//             </div>
//             <div className="text-[0.7rem] font-semibold text-[var(--text-muted)] mt-0.5 uppercase tracking-wider">Rating</div>
//           </div>
//         </div>
//       </div>

//       {/* Right Column: Sign-in Form */}
//       <div className="flex items-center justify-center p-8 md:p-12 bg-[var(--bg-surface)]">
//         <div className="w-full max-w-[360px]">
//           <div className="mb-6 text-left">
//             <h2 className="text-2xl font-bold tracking-[-0.5px] text-[var(--text-main)] mb-1">Sign in</h2>
//             <p className="text-[0.9rem] text-[var(--text-muted)]">Enter your credentials to continue</p>
//           </div>

//           <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
//             {/* Email Address Input */}
//             <div className="relative w-full flex items-center">
//               <span className="absolute left-[1.15rem] flex items-center justify-center text-[var(--text-muted)] pointer-events-none">
//                 <svg 
//                   width="18" 
//                   height="18" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 >
//                   <rect x="3" y="4" width="18" height="16" rx="2"/>
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
//                 </svg>
//               </span>
//               <input 
//                 type="email" 
//                 className="w-full py-[0.85rem] pr-[1.15rem] pl-[2.85rem] text-[0.95rem] rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-main)] transition-all duration-[var(--transition-fast)] placeholder:text-[#94A3B8] placeholder:opacity-80 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--bg-surface)] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.12)]" 
//                 placeholder="Email address" 
//                 required 
//               />
//             </div>

//             {/* Password Input */}
//             <div className="relative w-full flex items-center">
//               <span className="absolute left-[1.15rem] flex items-center justify-center text-[var(--text-muted)] pointer-events-none">
//                 <svg 
//                   width="18" 
//                   height="18" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 >
//                   <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                 </svg>
//               </span>
//               <input 
//                 type="password" 
//                 className="w-full py-[0.85rem] pr-[2.85rem] pl-[2.85rem] text-[0.95rem] rounded-[var(--radius-sm)] border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-main)] transition-all duration-[var(--transition-fast)] placeholder:text-[#94A3B8] placeholder:opacity-80 focus:outline-none focus:border-[var(--primary)] focus:bg-[var(--bg-surface)] focus:ring-[4px] focus:ring-[rgba(37,99,235,0.12)]" 
//                 placeholder="Password" 
//                 required 
//               />
//               <span className="absolute right-[1.15rem] flex items-center justify-center text-[var(--text-muted)] cursor-pointer transition-colors duration-[var(--transition-fast)] hover:text-[var(--text-main)]">
//                 <svg 
//                   width="18" 
//                   height="18" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round"
//                 >
//                   <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
//                   <circle cx="12" cy="12" r="3"/>
//                 </svg>
//               </span>
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="group w-full py-[0.9rem] mt-2 bg-[var(--primary-gradient)] text-[var(--text-inverse)] border-none rounded-[var(--radius-sm)] font-semibold text-[0.95rem] cursor-pointer shadow-[var(--shadow-primary)] flex items-center justify-center gap-2 transition-all duration-[var(--transition-fast)] hover:translate-y-[-2px] hover:shadow-[0_12px_20px_-6px_rgba(37,99,235,0.4)] active:translate-y-0">
//               Sign in
//               <svg 
//                 width="18" 
//                 height="18" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 strokeWidth="2.5" 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round"
//                 className="transition-transform duration-[var(--transition-fast)] group-hover:translate-x-[3px]"
//               >
//                 <line x1="5" y1="12" x2="19" y2="12"/>
//                 <polyline points="12 5 19 12 12 19"/>
//               </svg>
//             </button>
//           </form>

//           {/* Footer Link */}
//           <p className="text-center text-[0.9rem] text-[var(--text-muted)] mt-6">
//             Don't have an account? <span className="text-[var(--primary)] font-semibold cursor-pointer hover:underline" onClick={() => setCurrentPage('register')}>Create one</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
