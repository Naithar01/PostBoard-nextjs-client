import React, { useState } from "react";
import UserLoginTemplate from "../../components/User/Login/UserLoginTemplate";

const UserLoginPage = () => {
  const [userLoginInputState, setUserLoginInputState] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const UserLoginInputStateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserLoginInputState({
      ...userLoginInputState,
      [e.target.name]: e.target.value,
    });
  };

  const UserLoginSubmitHandler = () => {
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
