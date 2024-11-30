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
import sneakersSlice from "./sneakers/sneakersSlice.ts";
import basketSlice from "./basket/basketSlice.ts";
import dataSlice from "./dataSlice.ts";
import { teamSlice } from "./team/teamSlice.ts";
import { sneakerSlice } from "./sneakers/sneakerSlise.ts";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    sneakers: sneakersSlice,
    sneaker: sneakerSlice.reducer,
    basket: basketSlice,
    team: teamSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
