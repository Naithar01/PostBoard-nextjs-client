import { HYDRATE } from "next-redux-wrapper";
import { ReducerAction } from "react";
import { combineReducers } from "redux";

import user from "./userSlice";

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    user,
  })(state, action);
};

export default reducer;
