import { message } from 'antd';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getCart, updateCart } from '../../api/cartApi';
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
  CartActionContextInterface,
  CartContextInterface,
  ChangeQuantify,
  RemoveProduct,
  UserContextInterface,
} from '../../interfaces';
import { UserContext } from '../UserProvider';

const CartContext = createContext<CartContextInterface | null>(null);

const CartActionContext = createContext<CartActionContextInterface | null>(
  null
);

export default function CartProvider({ children }: PropsWithChildren) {
  const [discountInfo, setDiscountInfo] = useState(initDiscountInfo);

  const [cart, setCart] = useLocalStorage(initCart, KEY_LOCAL_STORAGE_CART);

  const { user } = useContext(UserContext) as UserContextInterface;

  useEffect(() => {
    if (!user) {
      setCart(initCart);
    }
  }, [user, setCart]);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const response = await getCart();
          if (response.data.success) {
            setCart(response.data.data);
          }
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [setCart, user]);

  useEffect(() => {
    let idTimeOut: ReturnType<typeof setTimeout>;
    if (user) {
      idTimeOut = setTimeout(() => {
        (async () => {
          try {
            await updateCart(cart);
          } catch (e) {
            console.log(e);
          }
        })();
      }, 1000);
    }
    return () => {
      clearTimeout(idTimeOut);
    };
  }, [cart, user]);

  const addProduct = useCallback<AddProduct>(
    (product, quantify = 1, silent = false) => {
      const isExisted = cart.find((item) => item.product.id === product.id);

      if (isExisted) {
        if (!silent) {
          message.error({
            content: 'Sản phẩm đã có trong giỏ hàng!',
            className: 'custom-message',
          });
        }
        return;
      }

      setCart((prevCart) => [
        ...prevCart,
        {
          product,
          quantify,
        },
      ]);
      if (silent) {
        return;
      }
      message.success({
        content: 'Thêm vào giỏ hàng thành công!',
        className: 'custom-message',
      });
    },
    [cart, setCart]
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
    [setCart]
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
