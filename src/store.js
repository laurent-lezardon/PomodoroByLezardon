import { configureStore } from "@reduxjs/toolkit";
import pomodoro from "./features/pomodoro";

export const store = configureStore({
  reducer: {
    pomodoro,
  },
});
