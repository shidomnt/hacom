import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getProfile } from '../../api/userApi';
import {
  CartActionContextInterface,
  CartContextInterface,
  LoginUserDto,
  User,
  UserActionContextInterface,
  UserContextInterface,
} from '../../interfaces';
import { login as loginApi } from '../../api/userApi';
import { message } from 'antd';
import { KEY_LOCAL_STORAGE_ACCESS_TOKEN } from '../../constant';
import { getCart, updateCart } from '../../api/cartApi';
import { CartActionContext, CartContext } from '../CartProvider';

const UserContext = React.createContext<UserContextInterface | null>(null);

const UserActionContext =
  React.createContext<UserActionContextInterface | null>(null);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  const { cart } = useContext(CartContext) as CartContextInterface;

  const { removeProduct, appendProducts } = useContext(
    CartActionContext
  ) as CartActionContextInterface;

  useEffect(() => {
    (async () => {
      try {
        const response = await getProfile();
        if (!response.data?.success) {
          throw new Error('Loi khi get Profile');
        }
        setUser(response.data.data);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const response = await getCart();
          console.log('getcart')
          if (response.data.success) {
            appendProducts(response.data.data, true);
          }
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [user, appendProducts]);

  useEffect(() => {
    let idTimeOut: ReturnType<typeof setTimeout>;
    if (user) {
      idTimeOut = setTimeout(() => {
        (async () => {
          try {
            console.log('update cart')
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

  const login = useCallback(
    async (payload: LoginUserDto, onSuccess: () => void = () => {}) => {
      const hide = message.loading('Action in progress..', 0);
      try {
        const response = await loginApi<'email'>(payload);
        if (!response.data?.success) {
          throw new Error('Dang nhap that bai');
        }
        localStorage.setItem(
          KEY_LOCAL_STORAGE_ACCESS_TOKEN,
          response.data.accessToken
        );
        const res = await getProfile();
        if (!res.data?.success) {
          throw new Error('Dang nhap that bai');
        }
        setUser(res.data.data);
        hide();
        message.success('Dang nhap thanh cong!');
        onSuccess();
      } catch (e) {
        if (e instanceof Error) {
          hide();
          message.error(e.message);
        }
      }
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE_ACCESS_TOKEN, '');
    removeProduct('all', true);
    setUser(null);
  }, [removeProduct]);

  return (
    <UserActionContext.Provider value={{ login, logout }}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </UserActionContext.Provider>
  );
}

export { UserContext, UserActionContext };
