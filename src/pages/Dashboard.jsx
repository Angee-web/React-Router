import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/services/Services";
import Navbar from "../component/Navbar";
import Students from "../pages/students/Students";
import CarHire from "../pages/services/CarHire";
import CarRepair from "../pages/services/CarRepair";
import StudentPreview from "../pages/students/StudentPreview";
import Blog from "../pages/blog/Blog";
import BlogPreview from "../pages/blog/BlogPreview";
import Mart from "../pages/mart/Mart";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";

const Dashboard = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);

 
  if (!userData) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested route */}
        <Route path="/services" element={<Services />}>
          <Route path="car-repair" element={<CarRepair />} />
          <Route path="car-hire" element={<CarHire />} />
        </Route>

        {/* Nested Route */}
        <Route path="/student" element={<Students />} />
        <Route path="/student/:slug" element={<StudentPreview />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPreview />} />

        <Route path="/mart" element={<Mart />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Dashboard;
