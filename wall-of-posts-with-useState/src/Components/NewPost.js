import classes from "./NewPost.module.css";
function NewPost(props) {
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          name="body"
          required
          rows={8}
          onChange={props.onAddText}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          required
          name="author"
          onChange={props.onAddAuthor}
        />
      </div>
      <div className={classes.actions}>
        <button type="reset" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
