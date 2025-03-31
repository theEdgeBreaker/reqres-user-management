// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true;
//       localStorage.setItem("isAuthenticated", "true");
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       localStorage.removeItem("isAuthenticated");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save to localStorage
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Remove from localStorage
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
