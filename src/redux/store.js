import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import subscriptionReducer from "./subscriptionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
