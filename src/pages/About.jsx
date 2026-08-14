import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, Star, Truck, ShieldCheck, Heart, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  // Animation variants for staggered load-ins
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  // Metrics Data
  const metrics = [
    { id: 1, value: '20K+', label: 'Products', icon: <Package className="w-6 h-6 text-primary" /> },
    { id: 2, value: '50K+', label: 'Happy Customers', icon: <Users className="w-6 h-6 text-primary" /> },
    { id: 3, value: '4.9', label: 'Avg. Rating', icon: <Star className="w-6 h-6 text-primary fill-primary" /> },
    { id: 4, value: '99%', label: 'On-time Delivery', icon: <Truck className="w-6 h-6 text-primary" /> },
  ];

  // Values Data
  const values = [
    {
      id: 1,
      title: 'Trust',
      description: 'Every product is verified for quality and authenticity before listing.',
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
      id: 2,
      title: 'Speed',
      description: 'We obsess over delivery times so your orders arrive when promised.',
      icon: <Truck className="w-6 h-6 text-primary" />,
    },
    {
      id: 3,
      title: 'Community',
      description: 'Built around real customer feedback and trust, not just business metrics.',
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
    {
      id: 4,
      title: 'Quality',
      description: 'We curate the best — no filler, no junk, just great products with top-notch quality.',
      icon: <Sparkles className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div 
    style={{paddingTop:"4rem",paddingBottom:"4rem",paddingLeft:"1rem",paddingRight:"1rem"}}
    className="about-section flex flex-col items-center  text-text-main min-h-screen  overflow-hidden font-sans 
     bg-[#111]  bg-[length:40px_40px]
    bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] 
     ">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header Hero Section */}
        <motion.div variants={fadeInUpVariants} className="navbar-logo flex flex-col items-center cursor-pointer "
        style={{marginBottom:"2.7rem"}}>

  
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            style={{marginBottom:"1rem"}}
            className="w-16 h-16 flex items-center justify-center rounded-2xl shadow-md mb-6 cursor-pointer"
          > 
           <svg className="h-14 w-16" width="240" height="160" viewBox="0 0 240 165" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            
          </motion.div>
          <h1 style={{marginBottom:"1rem"}} 
          className="tracking-normal flex items-center text-3xl text-white font-medium tracking-wide">
            <strong style={{marginRight:"0.47rem", fontWeight:"500"}} 
            className="text-white">About</strong> Cart<span >ify</span></h1>
        
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed text-center">
            Cartify is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          variants={containerVariants}
          style={{marginBottom:"2rem"}}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 "
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={scaleUpVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: 'var(--shadow-primary)',
                borderColor: 'var(--primary-light)'
              }}
              style={{padding:"1.5rem"}}
              className="bg-bg-surface border border-gray-500 rounded-3xl  flex flex-col items-center text-center shadow-sm transition-all duration-300"
            >
              <div style={{marginBottom:"0.5rem"}} className="p-3 bg-primary/5 rounded-radius-sm text-blue-700 ">
                {metric.icon}
              </div>
              <span style={{marginBottom:"0.17rem"}} className="text-3xl font-extrabold text-gray-200 tracking-tight mb-1">
                {metric.value}
              </span>
              <span className="text-sm font-medium text-gray-200">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story Card */}
        <motion.div 
          variants={fadeInUpVariants}
          whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
          style={{marginBottom:"2.5rem",padding:"2rem"}}
          className="about-story bg-bg-surface border border-gray-500 rounded-xl p-8 md:p-12 mb-16 shadow-md transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary-light" />
          <h2 style={{marginBottom:"1rem"}} className="text-2xl sm:text-3xl font-semibold text-white mb-6">Our Story</h2>
          <div className="space-y-6 text-base sm:text-lg text-gray-500 leading-relaxed">
            <p>
              Cartify started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: <em className="text-primary not-italic font-semibold">what if shopping online was actually enjoyable?</em>
            </p>
            <p>
              Three years later, Cartify serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </motion.div>

        {/* What We Stand For Section */}
        <motion.div variants={fadeInUpVariants} style={{marginBottom:"1.3rem"}} className="text-center ">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What We Stand For</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          style={{marginBottom:"2rem"}}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 "
        >
          {values.map((val) => (
            <motion.div
              key={val.id}
              variants={fadeInUpVariants}
              style={{padding:"1.45rem"}}
              whileHover={{ y: -4, borderColor: 'var(--primary-light)' }}
              className="bg-bg-surface border border-gray-500 rounded-2xl p-6 flex items-start gap-4 shadow-sm transition-all duration-300"
            >
              <div style={{padding:"0.45rem"}} className="p-3 bg-primary/5 rounded-radius-sm text-blue-700 flex-shrink-0">
                {val.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-gray-500 leading-relaxed">{val.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA Banner */}
        <motion.div 
          variants={fadeInUpVariants}
          style={{padding:"1.45rem"}}
          className="about-banner relative rounded-2xl bg-bg-surface border border-gray-500 shadow-lg  text-center overflow-hidden"
        >
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/5 rounded-full filter blur-3xl pointer-events-none -ml-32 -mb-32" />

          <h2 style={{marginBottom:"0.75rem"}} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight ">
            Ready to shop?
          </h2>
          <p style={{marginBottom:"1.15rem"}} className="text-lg text-gray-500 text-center mb-8  mx-auto">
            Explore thousands of products at unbeatable prices.
          </p>
          <motion.button 
            onClick={()=> navigate("/shop")}
            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-primary)' }}
            whileTap={{ scale: 0.98 }}
           
            className="about-btn inline-flex items-center gap-2 px-8 py-4 bg-blue-500 from-primary to-primary-light text-text-inverse font-bold rounded-radius-full shadow-md hover:from-primary-dark hover:to-primary transition-all duration-300 cursor-pointer"
          >
            <span>Browse Products</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;