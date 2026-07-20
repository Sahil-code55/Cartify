import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

export default function Home({ setCurrentPage }) {
  // Show first 3 products as featured
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="page home-page">
      <div className="hero-section">
        <h1>Summer Collection 2026</h1>
        <p>Discover premium products crafted with exceptional design, modern aesthetics, and ultimate functionality.</p>
        <button className="btn btn-primary" onClick={() => setCurrentPage('shop')}>
          Shop Now
        </button>
      </div>

      <h2 className="featured-title">Shop by Category</h2>
      <div className="grid-categories">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <h2 className="featured-title">Featured Products</h2>
      <div className="grid-products">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
