import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Authorized from "./components/Authorized";

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
const NotFound = () => {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title"> PAGE NOT FOUND 404 </div>
        Please go to <Link to="/">Main Page</Link>
      </div>
    </div>
  );
};
