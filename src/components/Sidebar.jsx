import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineArchive, MdOutlineLightbulb } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="lg:w-[260px] bg-white dark:bg-darkBackground text-darkBackground dark:text-lightGrey  w-[60px] pt-2 font-Nunito text-base font-[500] h-fit fixed">
      <div className="flex flex-col items-center justify-start gap-3 lg:gap-0">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-NavBg dark:text-darkBackground"
                : "bg-white dark:bg-darkBackground hover:bg-lightHover dark:hover:bg-darkHover"
            } w-[40px] h-[40px] lg:h-fit rounded-full lg:w-full lg:pl-12 lg:py-3 lg:rounded-l-none lg:rounded-r-full cursor-pointer flex items-center lg:justify-start justify-center p-2 gap-8`
          }
        >
          <MdOutlineLightbulb size={23} />{" "}
          <span className="hidden lg:inline-block">Notes</span>
        </NavLink>
        <NavLink
          to={"archive"}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-NavBg dark:text-darkBackground"
                : "bg-white dark:bg-darkBackground hover:bg-lightHover dark:hover:bg-darkHover"
            }  w-[40px] h-[40px] lg:h-fit rounded-full lg:w-full lg:pl-12 lg:py-3 lg:rounded-l-none lg:rounded-r-full cursor-pointer flex items-center lg:justify-start justify-center p-2 gap-8 `
          }
        >
          <MdOutlineArchive size={23} />{" "}
          <span className="hidden lg:inline-block">Archive</span>
        </NavLink>
        <NavLink
          to={"trash"}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-NavBg dark:text-darkBackground"
                : "bg-white dark:bg-darkBackground hover:bg-lightHover dark:hover:bg-darkHover"
            } w-[40px] h-[40px] lg:h-fit  rounded-full lg:w-full lg:pl-12 lg:py-3 lg:rounded-l-none lg:rounded-r-full cursor-pointer flex items-center lg:justify-start justify-center p-2 gap-8 `
          }
        >
          <FaRegTrashAlt size={20} />{" "}
          <span className="hidden lg:inline-block">Trash</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
