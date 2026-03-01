import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <p>Token stored: {token ? "✓" : "✗"}</p>
    </div>
  );
}
