import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import PageHeader from "../../components/Layouts/PageHeader/PageHeader";
import UserRegisterTemplate from "../../components/User/Register/UserRegisterTemplate";
import { RegisterUser } from "../../Lib/User";

interface IUserRegisterUseState {
  username: string;
  password: string;
  password_check: string;
}

const UserRegisterPage = () => {
  const router = useRouter();
  const [userRegisterInputState, setUserRegisterInputState] =
    useState<IUserRegisterUseState>({
      username: "",
      password: "",
      password_check: "",
    });

  const UserRegisterInputStateChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserRegisterInputState({
        ...userRegisterInputState,
        [e.target.name]: e.target.value,
      });
    },
    [userRegisterInputState]
  );

  const UserRegisterSubmitHandler = useCallback(async () => {
    if (
      userRegisterInputState.username.trim().length === 0 ||
      userRegisterInputState.password.trim().length === 0 ||
      userRegisterInputState.password_check.trim().length === 0
    ) {
      return alert("Register Fail");
    }

    if (
      userRegisterInputState.password !== userRegisterInputState.password_check
    ) {
      return alert("check password, Validate password");
    }

    await RegisterUser(
      userRegisterInputState.username,
      userRegisterInputState.password
    )
      .then((res) => {
        if (res.status !== 201) {
          throw new Error("Enter another Username");
        }
        router.push("/user/login");
        return alert("Register Success");
      })
      .catch((err) => {
        alert(`Register Fail\n${err.message}`);
      });
  }, [router, userRegisterInputState.password, userRegisterInputState.password_check, userRegisterInputState.username]);

  return (
    <div className="user_register">
      <PageHeader header_text="User Register Page" />
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
