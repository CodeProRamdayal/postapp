import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ modalIsVisible, onCloseModal }) {
  const [posts, setPosts] = useState([
    {
      id: "initial-post",
      authorName: "Ramdayal",
      contentBody: "Patel",
    },
  ]);

  const addPostHandler = (post) => {
    setPosts((currentPosts) => [
      ...currentPosts,
      {
        ...post,
        id: crypto.randomUUID(),
      },
    ]);
    onCloseModal();
  };

  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={onCloseModal}>
          <NewPost onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post
            key={post.id}
            authorName={post.authorName}
            contentBody={post.contentBody}
          />
        ))}
      </ul>
    </>
  );
}
export default PostList;
