import { Outlet, useLocation } from "react-router-dom";
import { Menu, Navbar } from "../components";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        closeButton={false}
        closeOnClick
        position="bottom-right"
        toastClassName="w-[350px] rounded-md py-7 px-5 font-worksans border border-b-0 border-zinc-600"
        theme="dark"
      />
      <Navbar openMenu={() => setMenuState(true)} />
      <Menu isMenuOpen={menuState} closeMenu={() => setMenuState(false)} />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
