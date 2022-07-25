import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
