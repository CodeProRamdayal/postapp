import { Link } from "react-router-dom";
import classes from "./Post.module.css";

export default function Post({ id, authorName, contentBody }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.text}>{contentBody}</p>
        <p className={classes.author}>{authorName}</p>
      </Link>
    </li>
  );
}
