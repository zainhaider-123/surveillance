import Connect from "./pages/Connect";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}
