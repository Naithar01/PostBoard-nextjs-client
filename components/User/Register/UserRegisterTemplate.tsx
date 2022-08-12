import React from "react";

import styles from "../../../styles/user/userregister.module.css";

interface IProps {
  UserRegisterInputStateChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  UserRegisterSubmitHandler: () => void;
}

const UserRegisterTemplate = ({
  UserRegisterInputStateChangeHandler,
  UserRegisterSubmitHandler,
}: IProps) => {
  return (
    <form className={styles.user_register_form}>
      {/* <div className={styles.user_register_header}>
        <p>Register</p>
      </div> */}
      <div className={styles.user_register_input}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          autoComplete="off"
          onChange={UserRegisterInputStateChangeHandler}
        />
      </div>
      <div className={styles.user_register_input}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          onChange={UserRegisterInputStateChangeHandler}
        />
      </div>
      <div className={styles.user_register_password_check}>
        <label htmlFor="password_check">Password Check</label>
        <input
          type="text"
          id="password_check"
          name="password_check"
          placeholder="password_check"
          autoComplete="password_check"
          onChange={UserRegisterInputStateChangeHandler}
        />
      </div>
      <div className={styles.user_register_button}>
        <button type="button" onClick={UserRegisterSubmitHandler}>
          Register
        </button>
      </div>
    </form>
  );
};

export default React.memo(UserRegisterTemplate);
