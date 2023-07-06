import { MdChat, MdPostAdd } from "react-icons/md";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdChat /> Wall Of Posts
      </h1>
      <Link to="/create-post" className={classes.new_post_button}>
        <MdPostAdd size={28} /> New Post
      </Link>
    </header>
  );
}

export default Header;
