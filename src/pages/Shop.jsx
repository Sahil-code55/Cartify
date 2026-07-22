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

const Shop = () => {
  return (
    <div>
      <h1>i am shop</h1>
    </div>
  )
}

export default Shop
