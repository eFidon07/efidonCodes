import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { footerlinks, menuLinks } from "../data/constants";
import { ExternalLink } from ".";
import { useEffect, useRef } from "react";

const Menu = (props: { isMenuOpen: boolean; closeMenu: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    menuRef.current?.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [props.isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`${
        props.isMenuOpen ? "w-full z-[9999] backdrop-blur-lg" : "w-0 z-50"
      } h-dvh overflow-auto fixed top-0 right-0 bg-[rgba(23,23,23,0.4)] transition-all duration-150`}
    >
      <nav
        className={`max-w-screen-2xl ${
          props.isMenuOpen ? "visible" : "invisible"
        } w-full px-10 pt-10 pb-4 flex items-center justify-between backdrop-blur-md md:backdrop-blur-none z-[10000] md:z-0 fixed top-0 left-1/2 -translate-x-1/2 text-white`}
      >
        <Link
          to="/"
          role="heading"
          onClick={(e) => {
            e.preventDefault();
            props.closeMenu();
            navigate("/");
          }}
        >
          eFidon<span className="text-lime-500">Codes.</span>
        </Link>

        <span className="hidden md:block w-32 text-xs text-center">
          full-stack web & mobile developer
        </span>

        <button
          onClick={props.closeMenu}
          className="flex items-center gap-x-0.5 text-lime-500 hover:text-white"
        >
          •<span>close</span>
        </button>
      </nav>

      <div className="max-w-screen-2xl -z-30 md:z-0 w-full mx-auto px-10 mt-40 mb-10 md:pb-0 text-white flex flex-col md:flex-row items-center md:items-start">
        <div className="w-3/4 md:w-1/2 flex flex-col gap-y-8">
          {menuLinks.map((link, index) => (
            <NavLink
              to={link.path}
              onClick={(e) => {
                e.preventDefault();
                props.closeMenu();
                navigate(link.path);
              }}
              key={index}
              className={({ isActive }) =>
                `group w-full md:w-fit text-3xl md:text-4xl lg:text-6xl flex items-center justify-center gap-x-4 ${
                  isActive && "text-lime-500"
                }`
              }
            >
              <div
                className={`${
                  location.pathname === link.path
                    ? "w-20"
                    : "w-0 group-hover:w-20"
                } h-2.5 bg-lime-500 transition-all duration-300`}
              />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="w-1/2 mt-20 md:mt-0 flex flex-col gap-y-8">
          {footerlinks.map((link, index) => (
            <Link
              to={link.url}
              key={index}
              className="group w-40 text-sm flex items-center justify-between hover:text-lime-500"
            >
              <span className="flex items-center gap-x-2">
                <link.Label />
                {link.text}
              </span>

              <ExternalLink fillClass="fill-white group-hover:fill-lime-500" />
            </Link>
          ))}

          <div className="mt-8 text-sm">
            <p className="text-lime-500">email</p>
            <Link
              to="mailto:efidoncodes@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:no-underline"
            >
              efidoncodes@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
