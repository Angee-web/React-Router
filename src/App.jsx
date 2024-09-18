import "./App.css";

import ErrorPage from "./pages/ErrorPage";

import Auth from "./auth/Auth";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />

        <Route path="/auth/blog" element={<Blog />} />

        <Route path="/auth/*" element={<Auth />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
