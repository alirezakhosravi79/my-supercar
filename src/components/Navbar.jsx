import { Menu } from "lucide-react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="bg-slate-100 py-1">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-5 lg:px-0">
          {/* logo */}
          <div>
            <img src={Logo} alt="" className="w-24" />
          </div>
          {/* nav */}
          <ul className="lg:flex gap-6 items-center hidden">
            <li className="hover:text-red-500 cursor-pointer transition-all">
              Home
            </li>
            <li className="hover:text-red-500 cursor-pointer transition-all">
              About
            </li>
            <li className="hover:text-red-500 cursor-pointer transition-all">
              Inventory
            </li>
            <li className="hover:text-red-500 cursor-pointer transition-all">
              Contact Us
            </li>
            <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-full">
              Book a Test Drive
            </button>
          </ul>
          <Menu className="lg:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
