import { useLoaderData, Link } from "react-router-dom";
import Modal from "./Modal";

function PostDetails() {
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <main>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={""}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main>
        <p>{post.authorName}</p>
        <p>{post.contentBody}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch("http://localhost:3000/posts/" + params.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  return resData.post;
}
