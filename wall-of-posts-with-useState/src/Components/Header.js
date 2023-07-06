import { MdChat, MdPostAdd } from "react-icons/md";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdChat /> Wall Of Posts
      </h1>
      <button onClick={props.newPost}>
        <MdPostAdd size={28} /> New Post
      </button>
    </header>
  );
}

export default Header;
