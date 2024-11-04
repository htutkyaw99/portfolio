import { useEffect, useState } from "react";

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
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
        navbarBg ? "bg-gray-900 text-gray-300" : "bg-transparent"
      }`}
    >
      <ul className="flex max-w-[1024px] mx-auto items-center justify-center space-x-5 h-20">
        <li
          className={` ${
            navbarBg ? "text-gray-400 hover:text-gray-300" : "nav-link"
          }  `}
        >
          <a href="#">Home</a>
        </li>
        <li
          className={` ${
            navbarBg ? "text-gray-400 hover:text-gray-300" : "nav-link"
          }  `}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={` ${
            navbarBg ? "text-gray-400 hover:text-gray-300" : "nav-link"
          }  `}
        >
          <a href="#works">Projects</a>
        </li>
        <li
          className={` ${
            navbarBg ? "text-gray-400 hover:text-gray-300" : "nav-link"
          }  `}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
