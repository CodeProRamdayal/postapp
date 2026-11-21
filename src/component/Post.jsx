import classes from "./Post.module.css";

export default function Post({ authorName, contentBody }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{authorName}</p>
      <p className={classes.text}>{contentBody}</p>
    </li>
  );
}
