import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onAddPost }) {
  const [post, setPost] = useState({
    contentBody: "",
    authorName: "",
  });

  const inputEventHandler = (event) => {
    const { name, value } = event.target;
    setPost((currentPost) => ({ ...currentPost, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    onAddPost(post);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          name="contentBody"
          required
          rows={3}
          onChange={inputEventHandler}
        />
      </p>
      <p>
        <label htmlFor="name"> Your name</label>
        <input
          type="text"
          id="name"
          name="authorName"
          required
          onChange={inputEventHandler}
        />
      </p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default NewPost;
