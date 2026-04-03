// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import { verifyToken, fetchCategories } from "./store/actions/clientActions"; // fetchCategories eklendi
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";

// Auto login component - App açıldığında token ve kategorileri kontrol et
function AutoLogin({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
    dispatch(fetchCategories()); // YENİ: Kategorileri çek
  }, [dispatch]);

  return children;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AutoLogin>
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/shop/:gender/:categoryName/:categoryId"
                element={<ShopPage />}
              />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </AutoLogin>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
