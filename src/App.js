import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Authorized from "./components/Authorized";
import NotFound from "./components/NotFound";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
     
      <Login />

     
    </div>
  );
};

