import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();
  // const [isFetching, setIsFetching] = useState(true);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     const response = await fetch("http://localhost:3000/posts", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const resData = await response.json(response);
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  return (
    <>
      {/* {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              authorName={post.authorName}
              contentBody={post.contentBody}
            />
          ))}
        </ul>
      )}
      {!isFetching && posts.length == 0 && (
        <div style={{ textAlign: "center", color: "#543280" }}>
          <h2>There are not posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <p style={{ textAlign: "center", color: "white" }}>Loading posts...</p>
      )} */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              authorName={post.authorName}
              contentBody={post.contentBody}
            />
          ))}
        </ul>
      )}
      {posts.length == 0 && (
        <div style={{ textAlign: "center", color: "#543280" }}>
          <h2>There are not posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostList;
