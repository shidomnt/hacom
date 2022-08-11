import { message } from 'antd';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import {
  MAX_SOLUONG,
  MIN_SOLUONG,
  KEY_LOCAL_STORAGE_CART,
  initDiscountInfo,
  initCart,
} from '../../constant';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  AddProduct,
  AppendProducts,
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
  const [discountInfo, setDiscountInfo] = useState(initDiscountInfo);

  const [cart, setCart] = useLocalStorage(initCart, KEY_LOCAL_STORAGE_CART);

  const addProduct = useCallback<AddProduct>(
    (product, quantify = 1, silent = false) => {
      setCart((prevCart) => {
        const isExisted = prevCart.find(
          (item) => item.product.id === product.id
        );

        if (isExisted) {
          if (!silent) {
            message.error({
              content: 'Sản phẩm đã có trong giỏ hàng!',
              className: 'custom-message',
            });
          }
          return prevCart;
        }

        if (!silent) {
          message.success({
            content: 'Thêm vào giỏ hàng thành công!',
            className: 'custom-message',
          });
        }

        return [
          ...prevCart,
          {
            product,
            quantify,
          },
        ];
      });
    },
    [setCart]
  );

  const appendProducts = useCallback<AppendProducts>(
    (cartItems, silent = false) => {
      cartItems.forEach((item) => {
        addProduct(item.product, item.quantify, silent);
      });
    },
    [addProduct]
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
    [setCart]
  );

  const removeProduct = useCallback<RemoveProduct>(
    (productIds, silent = false) => {
      let messageContent = 'Đã xóa sản phẩm khỏi giỏ hàng!';
      if (productIds === 'all') {
        setCart(initCart);
        messageContent = 'Đã xóa tất cả sản phẩm khỏi giỏ hàng!';
      } else {
        setCart((prevCart) =>
          prevCart.filter((item) => !productIds.includes(item.product.id))
        );
      }
      if (!silent) {
        message.success({
          content: messageContent,
          className: 'custom-message',
        });
      }
    },
    [setCart]
  );

  return (
    <CartActionContext.Provider
      value={{
        changeQuantify,
        addProduct,
        removeProduct,
        setDiscountInfo,
        appendProducts,
      }}
    >
      <CartContext.Provider value={{ cart, discountInfo }}>
        {children}
      </CartContext.Provider>
    </CartActionContext.Provider>
  );
}

export { CartContext, CartActionContext };
