import React, { createContext, useCallback, useEffect, useState } from "react";
import {
  MAX_SOLUONG,
  MIN_SOLUONG,
  KEY_LOCAL_STORAGE_CART,
} from "../../constant";

const CartContext = createContext(null);
const CartActionContext = createContext(null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [discountInfo, setDiscountInfo] = useState(null);

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem(KEY_LOCAL_STORAGE_CART);
    if (!cartLocalStorage) {
      localStorage.setItem(KEY_LOCAL_STORAGE_CART, JSON.stringify([]));
    } else {
      setCart(JSON.parse(cartLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE_CART, JSON.stringify(cart));
  }, [cart]);

  const addProduct = useCallback(
    (product, quantify = 1) => {
      const isExisted = cart.find((item) => item.product.id === product.id);

      if (isExisted) {
        return window.alert("San pham da co trong gio hang!");
      }

      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          quantify,
        },
      ]);
      window.alert("Them vao gio hang thanh cong!");
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
    if (productId === "all") {
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
        setDiscountInfo,
      }}
    >
      <CartContext.Provider value={{ cart, discountInfo }}>
        {children}
      </CartContext.Provider>
    </CartActionContext.Provider>
  );
}

export { CartContext, CartActionContext };
