import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();  //If e.preventDefault() is missing → page refreshes.
  console.log("Login clicked");
  try {
    const res = await axios.post(
      "https://quantumtrade-1abt.onrender.com/api/auth/login",
      credentials
    );

    localStorage.setItem("token", res.data.accessToken);

   window.location.href ="http://localhost:3001?token=" + res.data.accessToken;

  } catch (err) {
    const message = err.response?.data?.message;

    if (message === "Email not registered. Please sign up first.") {
      alert(message);
      navigate("/signup");
    } else {
      alert(message || "Login failed");
    }
  }
};
 return (
  <div className="auth_page">
    <div className="form_container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>

        <span>
          Don’t have an account? <Link to="/signup">Register</Link>
        </span>
      </form>
    </div>
  </div>
);
}