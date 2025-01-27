// import LoadingScreen from "@/components/common/LoadingScreen";
// import { useAuth } from "@/context/AuthProvider";
import { Navigate } from "react-router-dom";

function PublicRoute({ element: Component }) {
//   const { user, loading } = useAuth();
const user = false

//   if (loading) return <LoadingScreen />;

  return user ? <Navigate to={"/"} /> : <Component />;
}

export default PublicRoute;
