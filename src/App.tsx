import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DetailProduct from './components/DetailProduct';
import Cart from './components/Cart';
import Layout from './components/Layout';
import ProductsByCategory from './components/ProductsByCategory';
import SignupWithEmail from './components/Header/SignAndCart/SignModal/SignupWithEmail';
import SigninWithEmail from './components/Header/SignAndCart/SignModal/SigninWithEmail';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchUser, userSelector } from './features/user/user.slice';
import { fetchCart, selectAllCartItem } from './features/cart/cart.slice';
import { updateCart } from './api/cartApi';
import { StatusEnum } from './features/interface/statusEnum.interface';

function App() {
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector((state) => userSelector(state).status);
  const cart = useAppSelector((state) => selectAllCartItem(state.cart));

  useEffect(() => {
    if (userStatus === StatusEnum.idle) {
      (async () => {
        await dispatch(fetchUser());
      })();
    }
  }, [dispatch, userStatus]);

  useEffect(() => {
    if (userStatus === StatusEnum.fulfilled) {
      (async () => {
        await dispatch(fetchCart());
      })();
    }
  }, [dispatch, userStatus]);

  useEffect(() => {
    let idTimeOut: ReturnType<typeof setTimeout>;
    if (userStatus === StatusEnum.fulfilled) {
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
  }, [cart, userStatus]);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products">
              <Route index element={<Navigate to="/" />} />
              <Route path=":id" element={<DetailProduct />} />
            </Route>
            <Route path=":category">
              <Route index element={<ProductsByCategory />} />
              <Route path=":id" element={<DetailProduct />} />
            </Route>
            <Route path="dangki" element={<SignupWithEmail />} />
            <Route path="dangnhap" element={<SigninWithEmail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
