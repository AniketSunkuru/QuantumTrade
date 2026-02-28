//it ensures that dashboard can be acessed by loged in,signed up user only
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
}