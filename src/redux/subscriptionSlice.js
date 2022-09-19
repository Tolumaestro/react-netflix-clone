import { createSlice } from "@reduxjs/toolkit";

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    subscription: null,
  },
  reducers: {
    updateSub: (state, action) => {
      state.subscription = action.payload;
    },
  },
});

export const selectSubscription = (state) => state.subscription.subscription;

export const { updateSub } = subscriptionSlice.actions;

const subscriptionReducer = subscriptionSlice.reducer;

export default subscriptionReducer;
