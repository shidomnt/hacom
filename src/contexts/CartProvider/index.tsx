import { message } from 'antd';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  MAX_SOLUONG,
  MIN_SOLUONG,
  KEY_LOCAL_STORAGE_CART,
  initDiscountInfo,
  initCart,
} from '../../constant';
import {
  AddProduct,
  CartActionContextInterface,
  CartContextInterface,
  ChangeQuantify,
  RemoveProduct,
} from '../../interfaces';

const CartContext = createContext<CartContextInterface | null>(null);

const CartActionContext = createContext<CartActionContextInterface | null>(
  null
);

export default function CartProvider({ children }: PropsWithChildren) {
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

  const addProduct = useCallback<AddProduct>(
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

  const changeQuantify = useCallback<ChangeQuantify>(
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

  const removeProduct = useCallback<RemoveProduct>(
    /**
     * @type {RemoveProduct}
     */
    (productIds) => {
      let messageContent = 'Đã xóa sản phẩm khỏi giỏ hàng!';
      if (productIds === 'all') {
        setCart([]);
        messageContent = 'Đã xóa tất cả sản phẩm khỏi giỏ hàng!';
      } else {
        setCart((prevCart) =>
          prevCart.filter((item) => !productIds.includes(item.product.id))
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
