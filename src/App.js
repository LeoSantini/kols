// Import funções react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import de componentes
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:_id" element={<Product />} />
        <Route path="/addProduct" element={<Form />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
