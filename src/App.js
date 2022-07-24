import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
