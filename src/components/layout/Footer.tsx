import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-12 bg-[#fafafa] container flex items-center justify-evenly px-8 fixed bottom-0 ">
      <NavLink
        to="/events"
        className={({ isActive }) => (isActive ? "fill-orange" : "fill-black")}
      >

        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 122.88 122.88"
          className={"h-5 w-5 hover:fill-orange fill-inherit"}

          xmlSpace="preserve"
        >
          <g>
            <path
              className="st0"
              d="M1.04,79.96L64.7,16.3c0.55,0.07,1.13-0.1,1.55-0.52c0.42-0.42,0.6-1,0.52-1.55L79.96,1.04 c1.39-1.39,3.66-1.39,5.05,0l10.43,10.44c-2.74,4.47-2.17,10.39,1.7,14.26c3.87,3.87,9.79,4.43,14.26,1.7l10.43,10.43 c1.39,1.39,1.39,3.66,0,5.05l-13.19,13.19c-0.55-0.07-1.12,0.1-1.55,0.52c-0.42,0.42-0.6,1-0.52,1.55l-63.65,63.65 c-1.39,1.39-3.66,1.39-5.05,0L27.5,111.47c2.98-4.51,2.48-10.63-1.48-14.6c-3.97-3.97-10.09-4.46-14.6-1.48L1.04,85.01 C-0.35,83.62-0.35,81.35,1.04,79.96L1.04,79.96z M102.27,51.81c0.72-0.72,1.89-0.72,2.61,0c0.72,0.72,0.72,1.89,0,2.61 c-0.72,0.72-1.89,0.72-2.61,0C101.55,53.7,101.55,52.53,102.27,51.81L102.27,51.81z M97.44,46.98c0.72-0.72,1.89-0.72,2.61,0 c0.72,0.72,0.72,1.89,0,2.61c-0.72,0.72-1.89,0.72-2.61,0C96.72,48.87,96.72,47.7,97.44,46.98L97.44,46.98z M92.61,42.15 c0.72-0.72,1.89-0.72,2.61,0c0.72,0.72,0.72,1.89,0,2.61c-0.72,0.72-1.89,0.72-2.61,0C91.89,44.04,91.89,42.87,92.61,42.15 L92.61,42.15z M87.78,37.32c0.72-0.72,1.89-0.72,2.61,0c0.72,0.72,0.72,1.89,0,2.61c-0.72,0.72-1.89,0.72-2.61,0 C87.06,39.21,87.06,38.04,87.78,37.32L87.78,37.32z M82.95,32.49c0.72-0.72,1.89-0.72,2.61,0c0.72,0.72,0.72,1.89,0,2.61 c-0.72,0.72-1.89,0.72-2.61,0C82.23,34.38,82.23,33.21,82.95,32.49L82.95,32.49z M78.12,27.66c0.72-0.72,1.89-0.72,2.61,0 c0.72,0.72,0.72,1.89,0,2.61c-0.72,0.72-1.89,0.72-2.61,0C77.4,29.55,77.4,28.38,78.12,27.66L78.12,27.66z M73.29,22.83 c0.72-0.72,1.89-0.72,2.61,0c0.72,0.72,0.72,1.89,0,2.61c-0.72,0.72-1.89,0.72-2.61,0C72.57,24.72,72.57,23.55,73.29,22.83 L73.29,22.83z M68.46,18c0.72-0.72,1.89-0.72,2.61,0c0.72,0.72,0.72,1.89,0,2.61c-0.72,0.72-1.89,0.72-2.61,0 C67.74,19.89,67.74,18.72,68.46,18L68.46,18z M25.45,74.91l39.38-39.38c1.62-1.62,4.27-1.62,5.89,0l18.1,18.1 c1.62,1.62,1.62,4.27,0,5.89L49.44,98.9c-1.62,1.62-4.27,1.62-5.89,0l-18.1-18.1C23.83,79.18,23.83,76.53,25.45,74.91L25.45,74.91z"
            />
          </g>
        </svg>
      </NavLink>
      <NavLink
        to="/add-new"
        className={({ isActive }) => (isActive ? "fill-orange" : "fill-black")}
      >
        <svg
          width="36px"
          height="36px"
          className="h-5 w-5 hover:fill-orange  fill-inherit"
          viewBox="0 0 36 36"
          version="1.1"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Add new</title>
          <path
            className="clr-i-solid clr-i-solid-path-1"
            d="M29.29,4.95h-7.2a4.31,4.31,0,0,0-8.17,0H7A1.75,1.75,0,0,0,5,6.64V32.26a1.7,1.7,0,0,0,1.71,1.69H29.29A1.7,1.7,0,0,0,31,32.26V6.64A1.7,1.7,0,0,0,29.29,4.95Zm-18,3a1,1,0,0,1,1-1h3.44V6.32a2.31,2.31,0,0,1,4.63,0V7h3.44a1,1,0,0,1,1,1V9.8H11.25Zm14.52,9.23-9.12,9.12-5.24-5.24a1.4,1.4,0,0,1,2-2l3.26,3.26,7.14-7.14a1.4,1.4,0,1,1,2,2Z"
          ></path>
          <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
        </svg>
      </NavLink>
      <NavLink
        to="/wish-list"
        className={({ isActive }) => (isActive ? "fill-orange " : "fill-black")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:fill-orange fill-inherit"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "fill-orange" : "fill-black")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:fill-orange fill-inherit"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default Footer;