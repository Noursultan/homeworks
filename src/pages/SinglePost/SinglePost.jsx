import React, { useState } from "react";
import axios from "axios";
import s from "./SinglePost.module.css";

const SinglePost = () => {
  const [body, setBody] = useState("");
  const [showNotice, setShowNotice] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      body,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        post
      );
      console.log(response.data);

      setShowNotice(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>Add new post</label>
        <textarea
          className={s.input}
          placeholder="Your post:"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className={s.button} type="submit">
          Submit
        </button>

        {showNotice && (
          <p className={s.notice}>
            Your post added
            <br />
            Check console and network
            <br />
            <span className={s.span}>
              I'm sorry but I couldn't add posts to the list
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SinglePost;
