import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
