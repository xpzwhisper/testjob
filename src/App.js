import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { Error } from "./components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/Global";
import Container from "./components/Container";
import { MainProvider } from "./components/MainContext";

function App() {
  return (
    <>
      <MainProvider>
        <GlobalStyles />
        <Router>
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Container>
        </Router>
      </MainProvider>
    </>
  );
}

export default App;
