import { useEffect } from "react";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

  useEffect(() => {
    if (token) {
      // Redirect to dashboard app with token
      window.location.href = `${dashboardUrl}?token=${token}`;
    } else {
      // Redirect to login if no token
      window.location.href = "/login";
    }
  }, [token, dashboardUrl]);

  return null;
}
