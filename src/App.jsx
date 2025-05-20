import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SearchResults from "./pages/SearchResults";
import Men from "./components/Men";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Women from "./components/Women";
import Kids from "./components/Kids";
import ProductDetail from "./components/ProductDetail";
import SinglePageMen from "./components/SinglePageMen";
import Footer from "./components/Footer";
import SinglePageWomen from "./components/SinglePageWomen";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <Navbar />
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            // <ProtectedRoute>
              <Cart />
            // </ProtectedRoute>
          }
        />
        <Route path="/search" element={<SearchResults />} />
        {/* <Route path="/men" element={<Men/>}/> */}
        <Route path="/men" element={<SinglePageMen/>}/>
        <Route path="/women" element={<SinglePageWomen/>}/>
        <Route path='kids' element={<Kids/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;


