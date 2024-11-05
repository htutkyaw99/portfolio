import { useEffect, useState } from "react";
import NavLink from "../components/NavLink";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300" ${
        isScroll ? "bg-gray-900 text-gray-300" : "bg-transparent"
      }`}
    >
      <ul className="flex max-w-[1024px] mx-auto items-center justify-center space-x-5 h-20">
        <NavLink url="home" isScroll={isScroll} />
        <NavLink url="about" isScroll={isScroll} />
        <NavLink url="works" isScroll={isScroll} />
        <NavLink url="contact" isScroll={isScroll} />
      </ul>
    </nav>
  );
};

export default Header;
