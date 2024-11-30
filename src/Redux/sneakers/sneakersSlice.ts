import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Sneakers } from "../../types";


interface Params {
  priceFrom: number;    
  priceTo: number;      
  gender: string;       
  sizes: number[];      
}

const BASE_URL: string = "https://959449313ee7f991.mokky.dev";

export const fetchSneakers = createAsyncThunk<Sneakers[], Params>(
  "sneakers/fetchSneakers",
  async (params, { rejectWithValue }) => {
    try {
      const sizesQuery = params.sizes
        .map((value) => `sizes[]=${value}`)
        .join("&");
      const { data } = await axios.get<Sneakers[]>(
        `${BASE_URL}/sneakers?price[from]=${params.priceFrom}&price[to]=${params.priceTo
        }${params.gender ? `&gender=${params.gender}` : ""}${params.sizes.length ? `&${sizesQuery}` : ""}`
      );

      localStorage.setItem("sneakers", JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(`Failed to fetch:`);
      return rejectWithValue("Failed to fetch sneakers");
    }
  }
);
interface IState {
  data: Sneakers[];
  minPrice: number;
  maxPrice: number;
  isLoading: boolean;
  isError: boolean;
  resultSum: number
}
const initialState: IState = {
  data: JSON.parse(localStorage.getItem("sneakers") || "[]"),
  minPrice: 0,
  maxPrice: 0,
  isLoading: false,
  isError: false,
  resultSum: 0
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      const formattedData = action.payload.map((item: Sneakers) => ({
        ...item,
        price: Number(item.price.toString().replace(/\s+/g, "")),
        oldPrice: Number(item.oldPrice.toString().replace(/\s+/g, "")),
      }));
      state.data = formattedData;
      const prices = formattedData.map((item: { price: number }) => item.price);
      state.maxPrice = Math.max(...prices);
      state.minPrice = Math.min(...prices);
    });
  },
});

export default sneakersSlice.reducer;
