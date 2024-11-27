// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import sneakersSlice from "./sneakers/sneakersSlice";

// export const store = configureStore({
//   reducer: {
//     sneakers: sneakersSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

import { configureStore } from "@reduxjs/toolkit";
import sneakersSlice from "./slices/sneakersSlice";
import basketSlice from "./slices/basketSlice";
import dataSlice from "./slices/dataSlice.ts";
import { teamSlice } from "./slices/teamSlice.ts";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    sneakers: sneakersSlice,
    basket: basketSlice,
    team: teamSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;