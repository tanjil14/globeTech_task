import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
