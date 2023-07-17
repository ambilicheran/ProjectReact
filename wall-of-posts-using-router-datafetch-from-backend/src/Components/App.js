import NewPost from "../routes/NewPost";
import Post from "./Post";
import Modal from "./Modal";
import { useState } from "react";
import classes from "./App.module.css";

function App() {
  const [show, setShow] = useState(false);
  const [enteredText, setEnteredText] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();
  const [enteredPostData, setEnteredPostData] = useState([]);

  function cancelHandler() {
    setShow(false);
    setEnteredText("");
    setEnteredAuthor("");
  }
  function textAddHandler(event) {
    setEnteredText(event.target.value);
  }
  function authorAddHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(enteredPostData);
    const postData = {
      body: enteredText,
      author: enteredAuthor,
    };
    setEnteredPostData([...enteredPostData, postData]);
    cancelHandler();
  }

  return (
    <div>
      {/*      <Post body={"is lovely!"} author="Ambili" onCancel={cancelHandler} />  */}
      <div className={classes.postgrid}>
        {enteredPostData.map((post) => (
          <Post key={post.body} body={post.body} author={post.author} />
        ))}
      </div>
      <Modal visible={show}>
        {show && (
          <NewPost
            onSubmit={submitHandler}
            onAddText={textAddHandler}
            onAddAuthor={authorAddHandler}
          />
        )}
      </Modal>
    </div>
  );
}

export default App;
