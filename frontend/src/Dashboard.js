import { useEffect } from "react";

export default function Dashboard() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      // Redirect to dashboard app on localhost:3001 with token
      window.location.href = `http://localhost:3001?token=${token}`;
    } else {
      // Redirect to login if no token
      window.location.href = "/login";
    }
  }, [token]);

  return null;
}
