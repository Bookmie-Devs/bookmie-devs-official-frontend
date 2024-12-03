// import { useState } from "react";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
