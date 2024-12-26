import React from "react";
import "../styles/bottombarmovil.css";
import { BsFillCartFill, BsFillGridFill } from "react-icons/bs";

const BottombarMovil = (props) => {
  const { toggleSidebar, showSidebar } = props;

  return (
    <nav className="bottombar bottombar-hidden">
      <button className="bottombar-button">
        <BsFillCartFill className="text-2xl" />
      </button>
      <button className="bottombar-button">
        <BsFillGridFill className="text-2xl" />
      </button>
      <button className="bottombar-button">
        <BsFillCartFill className="text-2xl" />
      </button>
      <button onClick={toggleSidebar} className="bottombar-button">
        <BsFillGridFill className="text-2xl" />
      </button>
    </nav>
  );
};

export default BottombarMovil;
