import { NextCookies } from "next/dist/server/web/spec-extension/cookies";
import { useCookies } from "react-cookie";
import { Dispatch } from "redux";
import { loginUser } from "../store/reducers/userSlice";
import { CookieSetOptions } from "universal-cookie";
import router from "next/router";

export const UserLoginAction = (
  token: string,
  username: string,
  password: string,
  dispatch: Dispatch,
  setCookie: (
    name: string,
    value: any,
    options?: CookieSetOptions | undefined
  ) => void
) => {
  setCookie("token", token);
  setCookie("username", username);
  setCookie("password", password);
  dispatch(loginUser());
  alert("Login Success");
  router.push("/post");
};
