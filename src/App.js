import "./App.css";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path=":category/:id" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
