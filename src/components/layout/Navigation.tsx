import React from "react";
import { Link } from "react-router-dom";

import LogoName from "../../svg/logo.svg";

const Navigation = (props:any) => {
  return (
    <nav className="w-full container flex justify-around px-4 py-4 mx-auto bg-orange">
      <div>
        <img
          src={LogoName}
          alt="logo"
          className="w-20 h-20 col-start-1 font-medium text-2xl"
        />
      </div>
      <div className="hidden space-x-8 lg:flex self-center">
        <Link to="/events">Events</Link>
        <Link to="/add-new">Add new</Link>
        <Link to="/wish-list">Wish list</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="dropdown flex lg:hidden self-center justify-items-end">
        <button className="space-y-2">
          <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-20 inset-y-0 right-0">
          <li className="">
            <Link
              className="rounded-t bg-[#FECFB1] hover:bg-orange py-2 px-4 my-0 block whitespace-no-wrap border"
              to="/events"
            >
              Eventss
            </Link>
          </li>
          <li className="">
            <Link
              className="bg-[#FECFB1] hover:bg-orange py-2 px-4 block whitespace-no-wrap border"
              to="/add-new"
            >
              Add new
            </Link>
          </li>
          <li className="">
            <Link
              className="bg-[#FECFB1] hover:bg-orange py-2 px-4 block whitespace-no-wrap border"
              to="/wish-list"
            >
              Wish list
            </Link>
          </li>
          <li className="">
            <Link
              className="rounded-b bg-[#FECFB1] hover:bg-orange py-2 px-4 block whitespace-no-wrap border"
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
