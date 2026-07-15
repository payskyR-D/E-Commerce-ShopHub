import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { useAuthStore } from "./Store/authStore";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Categories from "./Pages/Categories";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ImportProducts from "./Pages/ImportProducts";
import ContactPage from "./Pages/ContactPage";
import CheckoutPage from "./Pages/CheckoutPage";
import About from "./Pages/AboutPage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";



function App() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [setUser]);

  return (
    <Routes>
      {/* Pages with Navbar & Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />




      </Route>

      {/* Auth Pages */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />


      {/* Admin */}
      <Route path="/import-products" element={<ImportProducts />} />
    </Routes>
  );
}

export default App;