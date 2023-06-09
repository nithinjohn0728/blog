import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForms = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const dispatch = useDispatch();

  const onsavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post Title:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onsavePostClicked}>
          Save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForms;
