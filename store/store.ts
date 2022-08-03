import { configureStore } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import reducer from "./reducers";

const makeStore = (context: Context) =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(makeStore, {
  debug: true,
});
