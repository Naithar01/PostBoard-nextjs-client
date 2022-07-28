import React, { useState } from "react";
import UserRegisterTemplate from "../../components/User/Register/UserRegisterTemplate";

interface IUserRegisterUseState {
  username: string;
  password: string;
  password_check: string;
}

const UserRegisterPage = () => {
  const [userRegisterInputState, setUserRegisterInputState] =
    useState<IUserRegisterUseState>({
      username: "",
      password: "",
      password_check: "",
    });

  const UserRegisterInputStateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserRegisterInputState({
      ...userRegisterInputState,
      [e.target.name]: e.target.value,
    });
  };

  const UserRegisterSubmitHandler = () => {
    if (
      userRegisterInputState.username.trim().length === 0 ||
      userRegisterInputState.password.trim().length === 0 ||
      userRegisterInputState.password_check.trim().length === 0
    ) {
      return alert(".");
    }

    console.log(userRegisterInputState);
  };

  return (
    <div className="user_register">
      <h3>User Register Page</h3>
      <UserRegisterTemplate
        UserRegisterInputStateChangeHandler={
          UserRegisterInputStateChangeHandler
        }
        UserRegisterSubmitHandler={UserRegisterSubmitHandler}
      />
    </div>
  );
};

export default UserRegisterPage;
