import React from "react";
import "../styles/navbar.css";
import { TbSearch } from "react-icons/tb";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="h-full">
        <ul className="navbar-ul">
          <li className="navbar-ul-li">
            <img src="/logo.png" className="h-full"></img>
          </li>
          <li className="navbar-ul-li">
            <form className="navbar-search">
              <TbSearch className="search-icon" placeholder="Search" />
              <input className="search-input" />
            </form>
          </li>
        </ul>
      </div>
      <div className="h-full">
        <ul className="navbar-ul">
          <li className="navbar-ul-li">
            <BsFillPersonFill className="text-2xl cursor-pointer" />
          </li>
          <li className="navbar-ul-li">
            <BsFillCartFill className="text-2xl cursor-pointer" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
