import { useLocation } from "react-router-dom";
import classes from "./Post.module.css";

function Post(props) {
  const location = useLocation();
  const formData = location.state;
  console.log(location);
  return (
    <div className={classes.post}>
      <p className={classes.author}>{formData.author}</p>
      <p className={classes.body}>{formData.body}</p>
    </div>
  );
}

export default Post;
