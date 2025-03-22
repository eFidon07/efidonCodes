import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { footerlinks, menuLinks } from "../data/constants";
import { ExternalLink } from ".";

const Menu = (props: { isMenuOpen: boolean; closeMenu: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`${
        props.isMenuOpen ? "w-full" : "w-0"
      } h-screen fixed z-50 top-0 right-0 bg-[rgba(23,23,23,0.4)] backdrop-blur-lg transition-all duration-150`}
    >
      <nav className="max-w-screen-2xl w-full px-10 pt-10 flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-40 text-white">
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

        <span className="w-32 text-xs text-center">
          full-stack web & mobile developer
        </span>

        <button
          onClick={props.closeMenu}
          className="flex items-center gap-x-0.5 text-lime-500 hover:text-white"
        >
          •<span>close</span>
        </button>
      </nav>

      <div className="max-w-screen-2xl w-full mx-auto px-10 mt-40 text-white flex">
        <div className="w-1/2 flex flex-col gap-y-8">
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
                `group w-fit text-6xl flex items-center gap-x-4 ${
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

        <div className="w-1/2 flex flex-col gap-y-8">
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
