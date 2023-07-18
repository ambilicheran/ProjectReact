import classes from "./LoginFields.module.css";
import { useState } from "react";
import login from "../utils";

function LoginFields() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [logging, setLogging] = useState(false);

  const disableButton = logging || !email || pw.length < 6;
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setLogging(true);
      await login({ email, pw });
      setError("");
      setLogging(false);
    } catch (error) {
      setError(error.message);
      setLogging(false);
    }
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.head}>
        <h1>Login</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div>
            <label htmlFor="pw">Password</label>
            <input
              type="text"
              id="pw"
              onChange={(e) => setPw(e.target.value)}
              value={pw}
            ></input>
          </div>
        </div>
        <p>{error}</p>
        <div className={classes.button_container}>
          <button disabled={disableButton} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginFields;
