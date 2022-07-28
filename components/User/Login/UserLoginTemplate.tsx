import React, { useState } from "react";

import styles from "../../../styles/user/userlogin.module.css";

interface IProps {
  UserLoginInputStateChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  UserLoginSubmitHandler: () => void;
}

const UserLoginTemplate = ({
  UserLoginInputStateChangeHandler,
  UserLoginSubmitHandler,
}: IProps) => {
  return (
    <form className={styles.user_login_form}>
      <header className={styles.user_login_header}>
        <p>Login</p>
      </header>
      <div className={styles.user_login_input}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          autoComplete="off"
          onChange={UserLoginInputStateChangeHandler}
        />
      </div>
      <div className={styles.user_login_input}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          onChange={UserLoginInputStateChangeHandler}
        />
      </div>
      <div className={styles.user_login_remember_me}>
        <label htmlFor="rememberme">Remember me</label>
        <input
          type="checkbox"
          id="rememberme"
          name="rememberme"
          onChange={UserLoginInputStateChangeHandler}
        />
      </div>
      <div className={styles.user_login_button}>
        <button type="button" onClick={UserLoginSubmitHandler}>
          Login
        </button>
      </div>
    </form>
  );
};

export default UserLoginTemplate;
