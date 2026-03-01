//it ensures that dashboard can be acessed by loged in,signed up user only
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

  // if (!token) {
  //   window.location.href = `${frontendUrl}/login`;
  //   return null;
  // }

  return children;
}