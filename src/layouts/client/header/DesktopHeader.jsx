import { Link, NavLink, useNavigate } from "react-router-dom";
import getNavConfig from "./config";
import SearchInput from "./SearchInput";
import { Button } from "@/components/ui/button";

const DesktopHeader = () => {
  const navLinks = getNavConfig();
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed z-10 w-full h-16 bg-white/90 backdrop-blur">
        <div className="container mx-auto hidden lg:flex justify-between items-center h-full">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-2xl font-bold flex-shrink-0">
              Homybid
            </Link>

            <nav className="flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium hover:bg-zinc-600 px-4 py-2 bg-black rounded-full text-white"
                      : "text-gray-600 font-medium hover:text-black px-4 py-2"
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <SearchInput />
            <Button
              variant="link"
              size="sm"
              className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            <Button
              size="sm"
              className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
};

export default DesktopHeader;
