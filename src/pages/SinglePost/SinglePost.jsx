import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import s from "./SinglePost.module.css";

const SinglePost = ({ addNewPost, postId }) => {
  const [body, setBody] = useState("");
  const [showNotice, setShowNotice] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      body,
    };

    try {
      const updatedPost = { ...post, id: postId };
      if (addNewPost) {
        addNewPost(updatedPost);
      }

      setShowNotice(true);
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>Add new post</label>
        <input
          className={s.input}
          placeholder="Your post:"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button className={s.button} type="submit">
          Submit
        </button>

        {showNotice && <p>Post added successfully!</p>}
      </form>
    </div>
  );
};

export default SinglePost;
