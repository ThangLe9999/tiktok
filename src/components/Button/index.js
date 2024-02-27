import clsx from "clsx";
import styles from "./Button.module.scss";
function Button({ primary }) {
  const classes = clsx(styles.btn, "thangle", {
    [styles.primary]: primary,
  });
  return (
    <div>
      <button className={classes}>Click me!</button>
    </div>
  );
}

export default Button;
