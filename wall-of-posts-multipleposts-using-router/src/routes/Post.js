import { useLocation } from "react-router-dom";
import classes from "./Post.module.css";

function Post(props) {
  const location = useLocation();
  const stateData = location.state;
  console.log(stateData);

  let postData = [
    {
      id: 1,
      body: "body1",
      author: "author1",
    },
    {
      id: 2,
      body: "body2",
      author: "author2",
    },
    {
      id: 3,
      body: "body3",
      author: "author3",
    },
  ];
  const allPostsData = {
    id: 4,
    body: "body4",
    author: "author4",
  };

  postData = [allPostsData, ...postData];

  return (
    <ul className={classes.post_container}>
      {postData.map((post) => (
        <li key={post.id} className={classes.post}>
          <p className={classes.author}>{post.author}</p>
          <p className={classes.body}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default Post;
