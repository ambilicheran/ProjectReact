import classes from "./NewPost.module.css";
import { Link, Form, redirect } from "react-router-dom";

function NewPost(props) {
  return (
    <>
      <Form method="POST" className={classes.form}>
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
      </Form>
    </>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
