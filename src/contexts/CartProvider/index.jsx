import React, { createContext, useCallback, useEffect, useState } from 'react'
import {
  MAX_SOLUONG,
  MIN_SOLUONG,
  KEY_LOCAL_STORAGE_CART,
} from '../../constant'

/**
 * @typedef {Object} CartItem
 * @property {import("../../hooks/useApi").Product} product
 * @property {number} quantify
 */

/**
 * @typedef {CartItem[]} Cart
 */

/**
 * @type {Cart}
 */
const initCart = []

/**
 * @type {import('../../constant').DiscountInfo | null}
 */
const initDiscountInfo = null

/**
 * @type {React.Context<{cart: Cart, discountInfo: import('../../constant').DiscountInfo | null}>}
 */
const CartContext = createContext()

const CartActionContext = createContext()

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(initCart)
  const [discountInfo, setDiscountInfo] = useState(initDiscountInfo)

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem(KEY_LOCAL_STORAGE_CART)
    if (!cartLocalStorage) {
      localStorage.setItem(KEY_LOCAL_STORAGE_CART, JSON.stringify([]))
    } else {
      setCart(JSON.parse(cartLocalStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE_CART, JSON.stringify(cart))
  }, [cart])

  const addProduct = useCallback(
    /**
     * @param {import('../../hooks/useApi').Product} product
     * @param {number} quantify
     */
    (product, quantify = 1) => {
      const isExisted = cart.find((item) => item.product.id === product.id)

      if (isExisted) {
        return window.alert('San pham da co trong gio hang!')
      }

      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          quantify,
        },
      ])
      window.alert('Them vao gio hang thanh cong!')
    },
    [cart]
  )

  const changeQuantify = useCallback(
    /**
     *
     * @param {string} productId
     * @param {number} newQuantify
     */
    (productId, newQuantify) => {
      if (newQuantify > MAX_SOLUONG) {
        newQuantify = MAX_SOLUONG
      }
      if (newQuantify < MIN_SOLUONG) {
        newQuantify = MIN_SOLUONG
      }
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.product.id !== productId) {
            return item
          }
          item.quantify = newQuantify
          return item
        })
      )
    },
    []
  )

  const removeProduct = useCallback(
    /**
     *
     * @param {string} productId
     */
    (productId) => {
      if (productId === 'all') {
        setCart([])
      }
      setCart((prevCart) =>
        prevCart.filter((item) => item.product.id !== productId)
      )
    },
    []
  )

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
  )
}

export { CartContext, CartActionContext }
