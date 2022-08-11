import { Dispatch } from "redux";
import { loginUser, logoutUser } from "../store/reducers/userSlice";
import router from "next/router";
import { Cookies } from "react-cookie";
import { LogoutUser } from "../Lib/User";

const cookies = new Cookies();

export const UserLoginAction = (
  token: string,
  username: string,
  password: string,
  dispatch: Dispatch
): void => {
  cookies.set("token", token, {
    maxAge: 24 * 60 * 60 * 1000,
  });
  cookies.set("username", username, {
    maxAge: 24 * 60 * 60 * 1000,
  });
  cookies.set("password", password, {
    maxAge: 24 * 60 * 60 * 1000,
  });
  dispatch(loginUser());
  alert("Login Success");
  router.push("/post");
};

export const UserLogoutAction = (dispatch: Dispatch): void => {
  LogoutUser();
  RemoveUserLoginCookieData();
  dispatch(logoutUser());
  alert("Logout");
  router.push("/");
};

export const RemoveUserLoginCookieData = () => {
  cookies.remove("token");
  cookies.remove("username");
  cookies.remove("password");
};

export const CheckUserLogin = async (dispatch: Dispatch): Promise<boolean> => {
  const { token, username, password } = await cookies.getAll();

  if (token && username && password) {
    return true;
  } else {
    dispatch(logoutUser());
    RemoveUserLoginCookieData();
    return false;
  }
};

export const GetLoginUserDate = async (): Promise<{
  token: string;
  username: string;
  password: string;
}> => {
  const { token, username, password } = await cookies.getAll();

  return {
    token,
    username,
    password,
  };
};

export const GetLoginUsernameData = async (): Promise<string> => {
  const { username } = await cookies.getAll();
  return username;
};
