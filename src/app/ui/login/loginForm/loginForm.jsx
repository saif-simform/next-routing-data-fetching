import Link from "next/link";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />

      <button>
        <Link href="/dashboard"> Login </Link>
      </button>
    </form>
  );
};

export default LoginForm;
