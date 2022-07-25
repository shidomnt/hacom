import React, { createContext, useCallback, useEffect, useState } from 'react';

const CartContext = createContext(null);
const CartActionContext = createContext(null);

const MIN_SOLUONG = 1;
const MAX_SOLUONG = 99;
const KEY_CART = 'KEY_CART';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem(KEY_CART);
    if (!cartLocalStorage) {
      localStorage.setItem(KEY_CART, JSON.stringify([]));
    } else {
      setCart(JSON.parse(cartLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_CART, JSON.stringify(cart));
  }, [cart]);

  const addProduct = useCallback(
    (product, quantify = 1) => {
      const isExisted = cart.find((item) => item.product.id === product.id);

      if (isExisted) {
        return window.alert('San pham da co trong gio hang!');
      }

      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          quantify,
        },
      ]);
      window.alert('Them vao gio hang thanh cong!');
    },
    [cart]
  );

  const changeQuantify = useCallback((productId, newQuantify) => {
    if (newQuantify > MAX_SOLUONG) {
      newQuantify = MAX_SOLUONG;
    }
    if (newQuantify < MIN_SOLUONG) {
      newQuantify = MIN_SOLUONG;
    }
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.product.id !== productId) {
          return item;
        }
        item.quantify = newQuantify;
        return item;
      })
    );
  }, []);

  const removeProduct = useCallback((productId) => {
    if (productId === 'all') {
      setCart([]);
    }
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  }, []);

  return (
    <CartActionContext.Provider
      value={{
        changeQuantify,
        addProduct,
        removeProduct,
      }}
    >
      <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
    </CartActionContext.Provider>
  );
}

export { CartContext, CartActionContext };
