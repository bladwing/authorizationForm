import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title"> PAGE NOT FOUND 404 </div>
        Please go to <Link to="/" className="MainPage">Main Page</Link>
      </div>
    </div>
  );
}
