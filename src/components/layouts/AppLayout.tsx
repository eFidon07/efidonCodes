import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Navbar } from "../ui";
import { ToastContainer } from "react-toastify";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
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

      <main className="w-full">{children}</main>
    </div>
  );
};

export default AppLayout;
