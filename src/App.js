// Import funções react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

// Import de componentes
import Navbar from "./Components/Navbar/index";
import Form from "./pages/Form";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Edit from "./pages/Edit/Edit";
import Contact from "./pages/Contact/Contact";
import Logo from "./assets/image/Kols22.png";

import axios from "axios";

function App() {
  const [stock, setStock] = useState();
  const [rerender, setRerender] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchStock() {
      try {
        const result = await axios.get("https://ironrest.herokuapp.com/kols");
        setStock(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setRerender(false);
        setIsLoading(false);
      }
    }
    fetchStock();
  }, [rerender]);

  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "67px",
          backgroundColor: "white",
          minWidth: 360,
          maxWidth: 420,
          margin: 0,
          padding: 0,
        }}
      >
        <img src={Logo} alt="logo"></img>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              stock={stock}
              isLoading={isLoading}
              setRerender={setRerender}
            />
          }
        />
        <Route
          path="/products"
          element={<Products stock={stock} isLoading={isLoading} />}
        />
        <Route
          path="/product/:_id"
          element={<Product stock={stock} setRerender={setRerender} />}
        />
        <Route
          path="/addProduct"
          element={<Form setRerender={setRerender} />}
        />
        <Route
          path="/editProduct/:_id"
          element={<Edit setRerender={setRerender} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
