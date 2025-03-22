import { Link } from "react-router-dom";

const Navbar = (props: { openMenu: () => void }) => {
  return (
    <nav className="max-w-screen-2xl w-full px-8 md:px-10 pt-10 pb-4 backdrop-blur flex items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 z-[60] text-white">
      <Link to="" role="heading">
        eFidon<span className="text-lime-500">Codes.</span>
      </Link>

      <span className="hidden md:block w-32 text-xs text-center">
        full-stack web & <span className="text-lime-500">mobile developer</span>
      </span>

      <button
        onClick={props.openMenu}
        onTouchStart={props.openMenu}
        className="flex items-center gap-x-0.5 hover:text-lime-500"
      >
        •<span>menu</span>
      </button>
    </nav>
  );
};

export default Navbar;
