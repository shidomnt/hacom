import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { getProfile } from '../../api/userApi';
import {
  LoginUserDto,
  User,
  UserActionContextInterface,
  UserContextInterface,
} from '../../interfaces';
import { login as loginApi } from '../../api/userApi';
import { message } from 'antd';
import { KEY_LOCAL_STORAGE_ACCESS_TOKEN } from '../../constant';

const UserContext = React.createContext<UserContextInterface | null>(null);

const UserActionContext =
  React.createContext<UserActionContextInterface | null>(null);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

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
    setUser(null);
  }, []);

  return (
    <UserActionContext.Provider value={{ login, logout }}>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </UserActionContext.Provider>
  );
}

export { UserContext, UserActionContext };
