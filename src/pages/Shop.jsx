// import { useState } from 'react';
// import { products } from '../data/products';
// import { categories } from '../data/categories';
// import ProductCard from '../components/ProductCard';
// import SearchBar from '../components/SearchBar';

// export default function Shop() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="page shop-page">
//       <h1>Shop All Products</h1>
//       <p>Browse through our premium, curated catalog of high-quality items.</p>

//       <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
//         <SearchBar onSearch={setSearchQuery} />
        
//         <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
//           <button 
//             className={`btn ${selectedCategory === 'All' ? 'btn-primary' : 'btn-secondary'}`}
//             onClick={() => setSelectedCategory('All')}
//           >
//             All
//           </button>
//           {categories.map((category) => (
//             <button 
//               key={category.id}
//               className={`btn ${selectedCategory === category.name ? 'btn-primary' : 'btn-secondary'}`}
//               onClick={() => setSelectedCategory(category.name)}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {filteredProducts.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
//           <h3>No products match your search.</h3>
//         </div>
//       ) : (
//         <div className="grid-products">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


import React from 'react'
import ShopHeader from '../components/ShopHeader';
import ShopCard  from "../components/ShopCard"
import ShopProductFilter from '../components/ShopProductFilter';
import ShopProductGrid from '../components/ShopProductgrid';
import { products } from '../data/products';

const Shop = () => {
  return (
    <div className="page shop-page min-h-screen overflow-hidden  bg-[#111]  bg-[length:40px_40px]
    bg-[image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" >
      
      <ShopHeader totalProducts={products.length}/>
      <ShopProductFilter/>
      <ShopProductGrid/>
      <ShopCard/>
      
    </div>
  )
}

export default Shop
