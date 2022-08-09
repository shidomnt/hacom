import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DetailProduct from './components/DetailProduct';
import Cart from './components/Cart';
import Layout from './components/Layout';
import CartProvider from './contexts/CartProvider';
import ProductsByCategory from './components/ProductsByCategory';
import SignupWithEmail from './components/Header/SignAndCart/SignModal/SignupWithEmail';
import SigninWithEmail from './components/Header/SignAndCart/SignModal/SigninWithEmail';
import { HelmetProvider } from 'react-helmet-async';
import UserProvider from './contexts/UserProvider';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <UserProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="cart" element={<Cart />} />
                <Route path=":category">
                  <Route index element={<ProductsByCategory />} />
                  <Route path=":id" element={<DetailProduct />} />
                </Route>
                <Route path="dangki" element={<SignupWithEmail />} />
                <Route path="dangnhap" element={<SigninWithEmail />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </CartProvider>
        </UserProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
