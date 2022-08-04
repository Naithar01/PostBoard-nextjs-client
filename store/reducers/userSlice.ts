import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserSlice {
  isLogin: boolean;
}

const initialState: IUserSlice = {
  isLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Login
    loginUser: (state) => {
      state.isLogin = true;
    },

    // LogOut
    logoutUser: (state) => {
      state.isLogin = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
