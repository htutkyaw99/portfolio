import { useEffect, useState } from "react";

type Props = {
  isScroll: boolean;
  url: string;
};

const NavLink = ({ isScroll, url }: Props) => {
  const [isActive, setIsActive] = useState(window.location.hash === `#${url}`);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === `#${url}`);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [url]);

  return (
    <li
      className={`${
        isScroll
          ? isActive
            ? "nav-scroll-link-active"
            : "nav-scroll-link"
          : "nav-link"
      }`}
    >
      <a href={`#${url}`}>{url}</a>
    </li>
  );
};

export default NavLink;
