import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/helpers';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page cart-page">
      <h1>Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Your shopping cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <span className="cart-item-price">{formatPrice(item.price)}</span>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div>
              <h3>Total Cart Value</h3>
              <span className="cart-total-price">{formatPrice(totalPrice)}</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-primary" onClick={() => alert('Proceeding to Checkout! (Integration Coming Soon)')}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
