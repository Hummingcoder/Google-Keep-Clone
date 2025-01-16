import React from "react";
import { SiGooglekeep } from "react-icons/si";
import useChangeTheme from "./useChangeTheme";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
  const [theme, toggleTheme] = useChangeTheme();
  return (
    <header className="w-full bg-white dark:bg-darkBackground text-darkBackground dark:text-lightGrey fixed h-[60px] z-[99] shadow-md dark:shadow-lg px-3 lg:px-12 flex items-center justify-between gap-4">
      <div className="flex items-center justify-center text-xl font-semibold gap-2">
        <SiGooglekeep size={30} className="text-[#fabd03]" />
        <h1>Notes</h1>
      </div>
      <button title="change theme" onClick={toggleTheme}>
        {theme === "dark" ? <CiLight size={30} /> : <CiDark size={30} />}
      </button>
    </header>
  );
};

export default Header;
