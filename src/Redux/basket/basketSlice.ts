import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Basket } from "../../types";

const BASE_URL: string = "https://bf7ccd25bc81ee40.mokky.dev";

export const fetchBasket = createAsyncThunk<Basket[] | []>(
  "basket/", 
  async (): Promise<Basket[]> => {
    try {
      const { data } = await axios.get<Basket[] | []>(`${BASE_URL}/basket/`);

      return data; 
    } catch (error) {
      console.log("Failed to fetch:");
      return [];
    }
  }
);

export const postBasket = createAsyncThunk<Basket, Basket>(
  "basket/postBasket", 
  async (item) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/basket`, item);

      return data;
    } catch (error) {
      throw new Error("Failed to post basket");
    }
  }
);

export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket",
  async (id) => {
    try {
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id;
    } catch (error) {
      throw new Error("Failed to delete basket"); 
    }
  }
);

interface IState {
  data: Basket[]; 
  resultSum: number;
}

const initialState: IState = {
  data: [],
  resultSum: 0,
};

export const basketSlice = createSlice({
  name: "basket", 
  initialState, 
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload; 
      state.data.map((item) => (state.resultSum += item.price));
    });

    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload); 
      state.resultSum += action.payload.price;
    });

    builder.addCase(delBasket.fulfilled, (state, action) => {
      const Tovar = state.data.find(
        (tovar: Basket) => tovar.id == action.payload
      );
      if (Tovar) {
        state.resultSum -= Tovar.price;
      }
      state.data = state.data.filter((el) => el.id !== action.payload);
    });
  },
});

export default basketSlice.reducer;
