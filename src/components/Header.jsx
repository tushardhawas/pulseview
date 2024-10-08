import React, { useState, useEffect } from "react";
import Logo from "../utils/Logo";
import Bell from "../utils/Bell";
import { Sun, Moon } from "../utils/toogle";
import Bar from "../utils/Bar";
import Sidebar from "./Sidebar";

const Header = () => {
  const [theme, setTheme] = useState(false);
  const [bar, setBar] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const toogle = () => {
    setBar((bar) => !bar);
    console.log(bar);
  };

  return (
    <>
      <div className="flex justify-between items-center   bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        <div className="flex items-center gap-4">
          <button  onClick={toogle} ><Bar color={theme ? "white" : "black"}/></button>
          <Logo color={theme ? "white" : "black"} />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>Overview</li>
            <li>Subscription</li>
            <li>Streams</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Bell color={theme ? "white" : "black"} />
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme ? (
              <Moon
                color={theme ? "white" : "black"}
                className="w-6 h-6 text-white"
              />
            ) : (
              <Sun className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
      {bar ? <Sidebar /> : null}
    </>
  );
};

export default Header;
