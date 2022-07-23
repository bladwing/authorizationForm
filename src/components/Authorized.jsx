import React from "react";
import { useNavigate } from "react-router-dom";

export default function Authorized() {
  const navMain = useNavigate();
  const LogOut = (e) => {
    e.preventDefault();
    navMain("/");
    localStorage.clear();
  };
  const userName = JSON.parse(localStorage.getItem("Login"));

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Logged in</div>
      <div className="Welcome"> Welcome: <b>{userName[1]}</b> <br /></div>
        
        <div className="User">User: <b>{userName[0]}</b></div>
        <button className="LogOut" onClick={LogOut}> Log Out </button>
      </div>
    </div>
  );
}
