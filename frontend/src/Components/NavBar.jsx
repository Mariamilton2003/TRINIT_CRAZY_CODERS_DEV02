import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { navBarList } from "../ultils/helper.js";
const NavBar = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  if (toggleTheme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <>
      <div className="w-full text-nowrap flex gap-x-12 justify-between items-center px-3 py-2 bg-mainBg-300">
        <Link
          to={"/"}
          className="font-heading font-bold text-2xl text-txt-950 hover:text-accent-700"
        >
          Lingua Connect
        </Link>
        <div className="w-[55%] gap-4 flex items-center justify-between">
          <div className="flex gap-8 justify-between">
            {navBarList &&
              navBarList.map((nav, i) => (
                <Link
                  to={`${nav.pathName}`}
                  key={i}
                  className="font-body font-bold text-txt-600 hover:text-txt-900"
                >
                  {nav.title}
                </Link>
              ))}
          </div>
          <div className="text-primary-500 p-2 rounded-full">
            {toggleTheme ? (
              <Icon
                icon={"ph:sun"}
                className="w-6 h-6"
                onClick={() => setToggleTheme((state) => !state)}
              />
            ) : (
              <Icon
                className="w-6 h-6"
                icon={"iconamoon:mode-dark-thin"}
                onClick={() => setToggleTheme((state) => !state)}
              />
            )}
          </div>

          <div className="flex gap-7 justify-between">
            <div className="px-5 py-2 rounded-3xl bg-primary-200 font-body  font-bold text-txt-800 hover:text-txt-100 hover:bg-primary-700">
              Sign in
            </div>
            <div className="px-5 py-2 rounded-3xl bg-primary-200 font-body  font-bold text-txt-800 hover:text-txt-100 hover:bg-primary-700">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
