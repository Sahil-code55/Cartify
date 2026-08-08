

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(initialCart);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);



// add product to cart
const addToCart = (product) => {
  setCart((prev) => {
    // Check if product already exists
    const existingProduct = prev.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      // Increase quantity
      updatedCart = prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product with quantity = 1
      updatedCart = [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  });
};

// increase product quantity
const increaseQuantity = (productId) => {
  setCart((prev) => {
    const updatedCart = prev.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  });
};

// decrease product quantity
const decreaseQuantity = (productId) => {
  setCart((prev) => {
    const updatedCart = prev
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  });
};




// delete product from cart
const deleteProduct = (productId) => {
  setCart((prev) => {
    const updatedCart = prev.filter(
      (item) => item.id !== productId
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  });
};

// clear cart
const clearCart = () => {
  localStorage.removeItem("cart");
  setCart([]);
  
};

// total amount
const totalAmount = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);



  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        cart,
        addToCart,
       deleteProduct,
       totalAmount,
       clearCart,
       increaseQuantity,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);