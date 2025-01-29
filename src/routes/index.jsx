import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import ClientLayout from "@/layouts/client";
import LoginPage from "@/pages/loginPage";
import SignnupPage from "@/pages/signupPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute element={ClientLayout} />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
  { path: "/login", element: <PublicRoute element={LoginPage} /> },
  { path: "/signup", element: <PublicRoute element={SignnupPage} /> },
  { path: "*", element: <h1>404</h1> },
]);
