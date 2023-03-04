import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

const initialStateValue = {
  _id: 0,
  email: "",
  name: "",
  picture: "",
  authorize: "",
  exp: 0,
  iat: 0,
};

const decodeInitial = () => {
  try {
    const da = jwt_decode(localStorage.getItem("xtoken") as string);
    return { isAuth: da ? true : false, value: da };
  } catch (err) {
    // console.log("Terjadi Kesalahan Decode");
    return { isAuth: false, value: initialStateValue };
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: decodeInitial(),
  reducers: {
    login: (state, action) => {
        localStorage.clear();
        const decoded = jwt_decode(action.payload);
        if(!decoded) false
        else {
            state.isAuth = true;
            state.value = decoded;
            localStorage.setItem("xtoken", action.payload);
        }  
    },
    logout: (state) => {
      state.isAuth = false;
      state.value = initialStateValue;
      localStorage.clear();
    },
    sett: (state, action) => {
      state.isAuth = true;
      state.value = action.payload;
    },
  },
});

export const { login, logout, sett } = userSlice.actions;

export default userSlice.reducer;