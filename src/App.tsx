// import { useState } from "react";
import Home from "./pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";

// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* // <Home />
      // <Footer />{" "} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
