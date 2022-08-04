import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import UserLoginTemplate from "../../components/User/Login/UserLoginTemplate";
import { LoginUser } from "../../Lib/User";
import { loginUser } from "../../store/reducers/userSlice";

interface IUserLoginUseState {
  username: string;
  password: string;
  rememberme: boolean;
}

type LoginSuccessData = {
  token: string;
  user: { id: string; username: string; password: string };
};

const UserLoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies();
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

  const LoginFailHandler = () => {
    alert("Login Fail");
    router.reload();
  };

  const UserLoginSubmitHandler = async () => {
    if (
      userLoginInputState.username.trim().length === 0 ||
      userLoginInputState.password.trim().length === 0
    ) {
      alert("Login Fail");
      return;
    }
    await LoginUser(userLoginInputState.username, userLoginInputState.password)
      .then((res) => {
        return res.json();
      })
      .then((data: LoginSuccessData) => {
        if (data && data.token) {
          setCookie("token", data.token);
          setCookie("username", data.user.username);
          setCookie("password", data.user.password);
        }
      })
      .catch((err) => {
        alert("Login Fail");
      });
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
