import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <Link to={"/"} className={s.head}>
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
          alt="logo"
        />
      </Link>

      <Link to={"/"} className={s.head}>
        <h1>HEADER</h1>
      </Link>
    </div>
  );
};

export default Header;
