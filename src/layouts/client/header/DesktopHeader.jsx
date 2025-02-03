import { Link } from "react-router-dom";
import getNavConfig from "./config";
import SearchInput from "./SearchInput";
import { Button } from "@/components/ui/button";

const DesktopHeader = () => {
  const navLinks = getNavConfig();

  return (
    <div className="hidden lg:flex justify-between items-center h-16 bg-white shadow-md px-4 sm:px-6">
      <Link to="/" className="text-2xl font-bold flex-shrink-0">
        Homybid
      </Link>

      <nav className="flex space-x-2">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-gray-700 hover:text-black px-4 py-2"
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <div className="flex items-center space-x-6">
        <SearchInput />
        <Button
          variant="outline"
          size="sm"
          className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Login
        </Button>

        <Button
          size="sm"
          className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default DesktopHeader;
