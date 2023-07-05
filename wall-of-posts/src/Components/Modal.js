import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div>
      <div
        onClick={props.onCancel}
        className={props.visible ? classes.backdrop : ""}
      ></div>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </div>
  );
}

export default Modal;
