import React, { useState } from "react";
import UserLoginTemplate from "../../components/User/Login/UserLoginTemplate";

interface IUserLoginUseState {
  username: string;
  password: string;
  rememberme: boolean;
}

const UserLoginPage = () => {
  const [userLoginInputState, setUserLoginInputState] =
    useState<IUserLoginUseState>({
      username: "",
      password: "",
      rememberme: false,
    });

  const UserLoginInputStateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.name === "rememberme") {
      setUserLoginInputState({
        ...userLoginInputState,
        [e.target.name]: e.target.checked,
      });
      return;
    }
    setUserLoginInputState({
      ...userLoginInputState,
      [e.target.name]: e.target.value,
    });
  };

  const UserLoginSubmitHandler = () => {
    if (
      userLoginInputState.username.trim().length === 0 ||
      userLoginInputState.password.trim().length === 0
    ) {
      return alert(".");
    }
    console.log(userLoginInputState);
  };

  return (
    <div className="user_login">
      <h3>User Login Page</h3>
      <UserLoginTemplate
        UserLoginInputStateChangeHandler={UserLoginInputStateChangeHandler}
        UserLoginSubmitHandler={UserLoginSubmitHandler}
      />
    </div>
  );
};

export default UserLoginPage;
