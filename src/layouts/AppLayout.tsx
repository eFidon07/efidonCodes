import { Outlet, useLocation } from "react-router-dom";
import { Menu, Navbar } from "../components";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <div className="w-full min-h-screen">
      <Navbar openMenu={() => setMenuState(true)} />
      <Menu isMenuOpen={menuState} closeMenu={() => setMenuState(false)} />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
