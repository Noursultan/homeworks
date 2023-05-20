import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <img
        src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
        alt="logo"
      />
      <h1>JSON PLACEHOLDER</h1>
    </div>
  );
};

export default Header;
