import classes from "./NewPost.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();

  const navigate = useNavigate();

  function updateBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function updateAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      id: uuidv4(),
      body: enteredBody,
      author: enteredAuthor,
    };
    navigate("/post", { state: postData });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea
          name="body"
          id="body"
          required
          rows={8}
          onChange={updateBodyHandler}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          required
          name="author"
          onChange={updateAuthorHandler}
        />
      </div>
      <div className={classes.actions}>
        <Link className={classes.linkbutton} to="..">
          Cancel
        </Link>
        <button type="submit" className={classes.linkbutton}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewPost;
