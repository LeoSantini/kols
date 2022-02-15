// Import funções react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import de componentes
import Navbar from "./Components/Navbar/index";
import Form from "./pages/Form";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Edit from "./pages/Edit/Edit"

import axios from "axios";

function App() {
  const [stock, setStock] = useState();
  const [rerender, setRerender] = useState(true);

  useEffect(() => {
    async function fetchStock() {
      try {
        const result = await axios.get("https://ironrest.herokuapp.com/kols");
        setStock(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setRerender(false);
      }
    }
    fetchStock();
  }, [rerender]);
  console.log(stock);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products stock={stock} setRerender={setRerender}/>} />
        <Route path="/product/:_id" element={<Product stock={stock} setRerender={setRerender} />} />
        <Route path="/addProduct" element={<Form />} />
        <Route path="/editProduct/:_id" element={<Edit setRerender={setRerender}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
