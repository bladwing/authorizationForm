import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { database } from "../utils/users";

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Incorrect username",
    pass: "Incorrect password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        Test(userData);
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const Test = (userData) => {
    localStorage.setItem(
      "Login",
      JSON.stringify([userData.username, userData.name])
    );
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" />
        </div>
        <div className="error">
          {renderErrorMessage("pass")}
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <button type="submit">Log In</button>
        </div>
      </form>

      <div className="example">
        Passwords for example: username: user1 password: pass1
        <hr />
        username: user2 password: pass2
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>

        {isSubmitted ? (
          <div>
            <Navigate to="/login" />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}
