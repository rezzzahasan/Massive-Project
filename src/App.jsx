import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Exhibitions from "./pages/Exhibitions";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pameran" element={<Exhibitions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
