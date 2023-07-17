import classes from "./NewPost.module.css";
import { Link } from "react-router-dom";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea name="body" id="body" required rows={8} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" required name="author" />
      </div>
      <div className={classes.actions}>
        <Link className={classes.linkbutton} to="..">
          Cancel
        </Link>
        <button className={classes.linkbutton} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewPost;
