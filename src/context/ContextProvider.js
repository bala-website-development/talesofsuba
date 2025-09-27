import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [currentActive, setCurrentActive] = useState("#home");

  const { pathname } = useRouter();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      typeof value === "boolean" ? value : !preMenuStatus
    );
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  useEffect(() => {
    toggleMenu(false);
  }, [pathname]);

  const value = {
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    currentActive,
    setCurrentActive,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
