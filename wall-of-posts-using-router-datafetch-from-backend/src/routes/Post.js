import { Outlet } from "react-router-dom";
import classes from "./Post.module.css";
import { useLoaderData } from "react-router-dom";

function Post(props) {
  const posts = useLoaderData();

  /* let postData = [
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
*/
  return (
    <>
      <ul className={classes.post_container}>
        {posts.map((post) => (
          <li key={post.id} className={classes.post}>
            <p className={classes.author}>{post.author}</p>
            <p className={classes.body}>{post.body}</p>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}

export default Post;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  console.log(resData.posts);
  return resData.posts;
}
