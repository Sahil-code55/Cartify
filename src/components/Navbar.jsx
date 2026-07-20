import { useCart } from '../context/CartContext';

export default function Navbar({ currentPage, setCurrentPage }) {
  const { cart } = useCart();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'cart', label: `Cart (${cart.length})` },
    { id: 'profile', label: 'Profile' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
        Cartify
      </div>
      <div className="navbar-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => setCurrentPage(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="navbar-actions">
        <button
          className= 
          {`nav-link-btn ${currentPage === 'login' ? 'active' : ''}`}
          onClick={() => setCurrentPage('login')}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
