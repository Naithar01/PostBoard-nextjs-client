export const LoginUser = async (username: string, password: string) => {
  return await fetch("http://localhost:4000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};

export const RegisterUser = async (username: string, password: string) => {
  return await fetch("http://localhost:4000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};

export const LogoutUser = async () => {
  return await fetch("http://localhost:4000/api/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
