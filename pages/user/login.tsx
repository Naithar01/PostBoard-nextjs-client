import React, { useState } from "react";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
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
    console.log();
  };

  return (
    <div className="user_login">
      <PageHeader header_text="User Login Page" />
      <UserLoginTemplate
        UserLoginInputStateChangeHandler={UserLoginInputStateChangeHandler}
        UserLoginSubmitHandler={UserLoginSubmitHandler}
      />
    </div>
  );
};

export default UserLoginPage;

// https://intrepidgeeks.com/tutorial/jwt-certification-mainly-frontend
// https://davidhwang.netlify.app/TIL/(0320)nextjs%EC%97%90%EC%84%9C-next-cookies-%EC%82%AC%EC%9A%A9-%EC%9D%B4%EC%8A%88/
