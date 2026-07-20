import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;
  
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        {product.category || 'Product'}
      </div>
      <h3>{product.name}</h3>
      <p className="price">{formatPrice(product.price)}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
