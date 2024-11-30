
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Sneakers } from "../../types";


const BASE_URL: string = "https://959449313ee7f991.mokky.dev";

export const fetchSneakerId = createAsyncThunk<Sneakers[], string>(
    "sneaker/id",
    async (id,{rejectWithValue}) => {
      try {
        const { data } = await axios.get<Sneakers>(
            `${BASE_URL}/sneakers/${id}`
          );
          localStorage.setItem("sneaker", JSON.stringify(data));
          return [data];  
    } catch (error) {
        console.error('Ошибка сети:', error);
        return rejectWithValue("Failed to fetch sneakers");
    }
    }
  );

  interface IState {
    data: Sneakers[];
  }

  const initialState: IState = {
    data: [],
  };

  export const sneakerSlice = createSlice({
    name: "sneaker",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
      builder.addCase(fetchSneakerId.fulfilled, (state, action) => {
        state.data = action.payload
       });
    },
  });

  export default sneakerSlice.reducer;