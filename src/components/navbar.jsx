import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-4 border-black px-6 py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black">A-F.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-4 py-2 border-4 border-black bg-yellow-300 shadow-[4px_4px_0px_black] hover:shadow-none transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 border-4 border-black bg-yellow-300 shadow-[4px_4px_0px_black] hover:shadow-none transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center border-t-4 border-black py-4">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block text-lg font-bold px-4 py-2 border-4 border-black bg-yellow-300 shadow-[4px_4px_0px_black] hover:shadow-none transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
