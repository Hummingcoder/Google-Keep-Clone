import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="h-[60px]  font-Nunito">
        <Header />
      </div>
      <Sidebar />
      <main className="h-fit bg-white dark:bg-darkBackground min-h-[100%] pl-[76px] md:pl-[92px] lg:pl-[282px] font-Nunito p-4 md:p-8">
        <Outlet />
      </main>
    </>
  );
};

export default App;
