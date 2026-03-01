import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3002/api/auth/register",
      form
    );

    alert("Registered Successfully");

    // ✅ Clear form fields
    setForm({
      username: "",
      email: "",
      password: ""
    });

    // ✅ Redirect to dashboard (pass token)
    window.location.href =
      "http://localhost:3001?token=" + res.data.accessToken;

  } catch (err) {
    if (err.response && err.response.data.message) {
      alert(err.response.data.message);
    } else {
      alert("Something went wrong");
    }
  }
};

 return (
  <div className="auth_page">
    <div className="form_container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            placeholder="Enter username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign Up</button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  </div>
);
};
