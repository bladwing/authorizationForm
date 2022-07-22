import React, { useState } from "react";

import "./App.css";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

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



  //here I try to make limited time....
  const Test = (userData, ttl) => {
    const now = new Date();
    const item = { expiry: now.getTime() + ttl };
    localStorage.setItem("Login", JSON.stringify([userData.username, item]));
  };

  const TestName = JSON.parse(localStorage.getItem("Login"));

  const LogOut = (e) => {
    e.preventDefault();
    window.location.reload();
    localStorage.clear();
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


    //Here I try to make real time logged user...
  const realTime = () => {
    if (TestName !== []) {
      setIsSubmitted(true);
    }
  };
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
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
      
        {isSubmitted ? (
          <div>
            User: {TestName[0]} is successfully logged in
            <button onClick={LogOut}> Log Out </button>
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
