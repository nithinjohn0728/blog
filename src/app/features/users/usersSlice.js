import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 {id:1,name:'alice'},
 {id:2,name:'bob'},
 {id:3,name:'charlie'}
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   
});
export const selectAllUsers = (state) =>state.users

export default usersSlice.reducer;
