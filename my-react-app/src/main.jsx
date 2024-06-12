import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from "./components/Quotes.jsx";
import Restaurant from "./components/Restaurant.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
