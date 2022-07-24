import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path=":category/:id" element={<DetailProduct />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
