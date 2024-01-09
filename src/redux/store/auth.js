import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: localStorage.getItem("user") ?? false,
};
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.email));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
});

export const { login, logout } = authReducer.actions;
export default authReducer.reducer;
