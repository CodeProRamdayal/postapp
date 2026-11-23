import { useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import classes from "./NewPost.module.css";

function NewPost() {
  const navigate = useNavigate();
  // const [post, setPost] = useState({
  //   contentBody: "",
  //   authorName: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [error, setError] = useState("");

  // const inputEventHandler = (event) => {
  //   const { name, value } = event.target;
  //   setPost((currentPost) => ({ ...currentPost, [name]: value }));
  // };

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   setError("");
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch("http://localhost:3000/posts", {
  //       method: "POST",
  //       body: JSON.stringify(post),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Unable to create the post. Please try again.");
  //     }

  //     navigate("/");
  //   } catch (submitError) {
  //     setError(
  //       submitError instanceof Error
  //         ? submitError.message
  //         : "Unable to create the post. Please try again.",
  //     );
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    // <form className={classes.form} onSubmit={submitHandler}>
    //   <p>
    //     <label htmlFor="body">Text</label>
    //     <textarea
    //       id="body"
    //       name="contentBody"
    //       required
    //       rows={3}
    //       onChange={inputEventHandler}
    //     />
    //   </p>
    //   <p>
    //     <label htmlFor="name"> Your name</label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="authorName"
    //       required
    //       onChange={inputEventHandler}
    //     />
    //   </p>
    //   {error && <p role="alert">{error}</p>}
    //   <section style={{ display: "flex", justifyContent: "space-between" }}>
    //     <button type="submit" disabled={isSubmitting}>
    //       {isSubmitting ? "Submitting..." : "Submit"}
    //     </button>
    //     <button type="button" onClick={() => navigate("/")}>
    //       Cancel
    //     </button>
    //   </section>
    // </form>
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="contentBody">Text</label>
        <textarea id="contentBody" name="contentBody" required rows={3} />
      </p>
      <p>
        <label htmlFor="authorName"> Your name</label>
        <input type="text" id="authorName" name="authorName" required />
      </p>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </section>
    </Form>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  try {
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return redirect("/");
  } catch (error) {
    console.log("Error in post data", error);
  }
}
