import React from "react";
import { useNavigate } from "react-router-dom";

export default function Authorized() {
  const navMain = useNavigate();
  const LogOut = (e) => {
    e.preventDefault();
    navMain("/");
    localStorage.clear();
  };
  const TestName = JSON.parse(localStorage.getItem("Login"));

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Logged in</div>
        you are Authorized User: <h2>{TestName[0]}</h2> is successfully logged
        in
        <button onClick={LogOut}> Log Out </button>
      </div>
    </div>
  );
}
