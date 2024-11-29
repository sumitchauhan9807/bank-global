import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setAdminData ,logOut } = adminSlice.actions;

export default adminSlice.reducer;
