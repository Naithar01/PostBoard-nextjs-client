import { Dispatch } from "redux";
import { loginUser, logoutUser } from "../store/reducers/userSlice";
import router from "next/router";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const UserLoginAction = (
  token: string,
  username: string,
  password: string,
  dispatch: Dispatch
) => {
  cookies.set("token", token);
  cookies.set("username", username);
  cookies.set("password", password);
  dispatch(loginUser());
  alert("Login Success");
  router.push("/post");
};

export const UserLogoutAction = async (dispatch: Dispatch) => {
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
