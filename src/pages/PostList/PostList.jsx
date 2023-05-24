import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import s from "./PostList.module.css";
import SinglePost from "../SinglePost/SinglePost";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [editedBody, setEditedBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error(error);
    }
  };

  const startEditing = (postId, body) => {
    setEditPostId(postId);
    setEditedBody(body);
  };

  const cancelEditing = () => {
    setEditPostId(null);
    setEditedBody("");
  };

  const savePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, body: editedBody };
        }
        return post;
      })
    );
    setEditPostId(null);
    setEditedBody("");
  };

  return (
    <div className={s.postsBack}>
      <SinglePost addNewPost={addNewPost} />
      <h4>POSTS</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {editPostId === post.id ? (
              <React.Fragment key={`edit-${post.id}`}>
                <input
                  type="text"
                  value={editedBody}
                  onChange={(e) => setEditedBody(e.target.value)}
                />
                <button
                  onClick={() =>
                    savePost(post.id, { id: post.id, body: editedBody })
                  }
                >
                  Save
                </button>
                <button onClick={cancelEditing}>Cancel</button>
              </React.Fragment>
            ) : (
              <React.Fragment key={`view-${post.id}`}>
                <button onClick={() => startEditing(post.id, post.body)}>
                  Edit
                </button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
                <NavLink to={`/posts/${post.id}`}>{post.body}</NavLink>
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
