import React from "react";
import { TbHomeCog, TbUserFilled, TbSearch } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import "../styles/sidebar.css";

const Sidebar = (props) => {
  const { showSidebar } = props;

  return (
    <div
      className={`sidebar  ${
        showSidebar ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <div className="w-full">
        <li className="w-full flex justify-center items-center">
          <img src="/logo.png" className="sidebar-img"></img>
        </li>
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              <TbHomeCog className="text-2xl" />
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              <GiClothes className="text-2xl" />
            </a>
          </li>
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              <TbUserFilled className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <ul className="sidebar-ul">
          <li className="sidebar-li">
            <a href="#" className="sidebar-a">
              <TbSearch className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
