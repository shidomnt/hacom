// @ts-check
import { message } from 'antd';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  MAX_SOLUONG,
  MIN_SOLUONG,
  KEY_LOCAL_STORAGE_CART,
  initDiscountInfo,
  initCart,
} from '../../constant';

/** ========= Type Define ========= */

/**
 * @callback AddProduct
 * @param {import('../../hooks/useApi').Product} product
 * @param {number=} quantify
 * @returns {void}
 */

/**
 * @callback ChangeQuantify
 * @param {string} productId
 * @param {number} newQuantify
 * @returns {void}
 */

/**
 * @callback RemoveProduct
 * @param {string | 'all'} productId
 * @return {void}
 */

/**
 * @typedef {Object} CartContextType
 * @property {import('../../constant').Cart} cart
 * @property {import('../../constant').DiscountInfo | null} discountInfo
 */

/**
 * @typedef {Object} CartActionContextType
 * @property {AddProduct} addProduct
 * @property {RemoveProduct} removeProduct
 * @property {ChangeQuantify} changeQuantify
 * @property {React.Dispatch<React.SetStateAction<import('../../constant').DiscountInfo | null>>} setDiscountInfo
 */

/** ========= Type Define ========= */

/**
 * @type {React.Context<CartContextType>}
 */
// @ts-ignore
const CartContext = createContext();

/**
 * @type {React.Context<CartActionContextType>}
 */
// @ts-ignore
const CartActionContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(initCart);
  const [discountInfo, setDiscountInfo] = useState(initDiscountInfo);

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem(KEY_LOCAL_STORAGE_CART);
    if (!cartLocalStorage) {
      localStorage.setItem(KEY_LOCAL_STORAGE_CART, JSON.stringify([]));
    } else {
      setCart(JSON.parse(cartLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (cart.length) {
      localStorage.setItem(KEY_LOCAL_STORAGE_CART, JSON.stringify(cart));
    }
  }, [cart]);

  console.log(cart);

  const addProduct = useCallback(
    /**
     * @type {AddProduct}
     */
    (product, quantify = 1) => {
      const isExisted = cart.find((item) => item.product.id === product.id);

      if (isExisted) {
        message.error({
          content: 'Sản phẩm đã có trong giỏ hàng!',
          className: 'custom-message',
        });
        return;
      }

      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          quantify,
        },
      ]);
      message.success({
        content: 'Thêm vào giỏ hàng thành công!',
        className: 'custom-message',
      });
    },
    [cart]
  );

  const changeQuantify = useCallback(
    /**
     * @type {ChangeQuantify}
     */
    (productId, newQuantify) => {
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
          return {
            ...item,
            quantify: newQuantify,
          };
        })
      );
    },
    []
  );

  const removeProduct = useCallback(
    /**
     * @type {RemoveProduct}
     */
    (productId) => {
      let messageContent = 'Đã xóa sản phẩm khỏi giỏ hàng!';
      if (productId === 'all') {
        setCart([]);
        messageContent = 'Đã xóa tất cả sản phẩm khỏi giỏ hàng!';
      } else {
        setCart((prevCart) =>
          prevCart.filter((item) => item.product.id !== productId)
        );
      }
      message.success({
        content: messageContent,
        className: 'custom-message',
      });
    },
    []
  );

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
