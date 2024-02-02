import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./todoSlice";

export const Store = configureStore({
  reducer: TodoReducer,
});
