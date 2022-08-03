import { createSlice } from "@reduxjs/toolkit"

interface IUserSlice {
    isLogin: boolean
}

const initialState: IUserSlice = {
    isLogin: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Login
        loginUser: () => {

        },

        // LogOut
        logoutUser: () => {

        },
    }
})

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;