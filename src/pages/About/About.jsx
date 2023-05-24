import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.form}>
      <img
        className={s.photo}
        src="https://apilist.fun/images/social/api/jsonplaceholder.png"
        alt=""
      />
    </div>
  );
};
export default About;
