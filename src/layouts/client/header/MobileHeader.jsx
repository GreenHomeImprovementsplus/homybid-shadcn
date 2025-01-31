import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const MobileHeader = ({ isOpen, toggleMenu }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="flex items-center h-16 px-4 sm:px-6">
        <Button
          onClick={toggleMenu}
          className='p-2 rounded-md bg-transparent text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset'
        >
          {isOpen ? (
            <X className="block h-6 w-6" />
          ) : (
            <Menu className="block h-6 w-6" />
          )}
        </Button>

        <Link to="/" className="text-xl font-bold ml-2">
          Homybid
        </Link>

        <div className="flex items-center ml-auto space-x-4">
          <Button
            size="sm"
            className="bg-black text-white hover:bg-gray-800 transition duration-200 ease-in-out"
          >
            Sign Up
          </Button>
          <SearchInput isMobile={true} />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
