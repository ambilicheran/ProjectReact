import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

function Modal(props) {
  return (
    <div>
      <Link to=".." className={classes.backdrop}></Link>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </div>
  );
}

export default Modal;
