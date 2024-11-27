// import { createSlice } from "@reduxjs/toolkit";
// import { Sneakers, SneakersState } from "../../types/index";
// import { getSneakers } from "../../api/sneakers/index";

// const initialState: SneakersState = {
//   isLoading: false,
//   data: [],
//   isError: false,
//   minPrice: 0,
//   maxPrice: 0,
//   basket: [],
//   resultSum: 0,
//   filter: [],
//   filtermaxPrice: 0,
//   filterminPrice: 0,
//   filterSelectedSizes:[],
//   statusFilter:false,
//   filterGender: '',
// };

// const sneakersSlice = createSlice({
//   name: "sneakers",
//   initialState,
//   reducers: {
//     addBasket: (state, { payload }) => {
//       state.resultSum += payload.price;
//       state.basket = [...state.basket, payload];
//     },
//     removeTovar: (state, { payload }) => {
//       const tovarId = payload;
//       const Tovar = state.basket.find((tovar) => tovar.id == tovarId);
//       if (Tovar) {
//         state.resultSum -= Tovar.price;
//       }
//       state.basket = state.basket.filter((tovar) => tovar.id !== tovarId);
//     },
//     filterTovar: (state, { payload }) => {
//       state.filtermaxPrice = payload.maxPrice
//       state.filterminPrice = payload.minPrice
//       state.filterGender = payload.gender
//       state.filterSelectedSizes = payload.sizes
//       state.statusFilter = true
//       state.filter = payload
//       console.log(state.filter)
//     },
//     resetFilter: (state) =>{
//       state.filtermaxPrice = 0
//       state.filterminPrice = 0
//       state.filterGender = ''
//       state.filterSelectedSizes = []
//       state.statusFilter = false
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getSneakers.pending, (state) => {
//       state.isLoading = true;
//       state.isError = false;
//     });
//     builder.addCase(getSneakers.fulfilled, (state, { payload }) => {
//       const formattedData = payload.map((item: Sneakers) => ({
//         ...item,
//         price: Number(item.price.toString().replace(/\s+/g, "")),
//         oldPrice: Number(item.oldPrice.toString().replace(/\s+/g, "")),
//       }));
//       state.data = [...state.data, ...formattedData];
//       const prices = formattedData.map((item: { price: number }) => item.price);
//       state.maxPrice = Math.max(...prices);
//       state.minPrice = Math.min(...prices);
//       state.isLoading = false;
//     });
//     builder.addCase(getSneakers.rejected, (state) => {
//       state.isLoading = false;
//       state.isError = true;
//     });
//   },
// });
// export const { addBasket, removeTovar, filterTovar,resetFilter } = sneakersSlice.actions;
// export default sneakersSlice.reducer;

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // export const selectFilteredSneakers = (state: any) => {
// //   // return state.data.filter((tovar: { price: number; size: []; }) =>{
// //   //   const isPriceValid = tovar.price >= state.filter.minPrice && tovar.price <= state.filter.maxPrice;
// //   //   const isSizeValid = state.filter.selectedSizes.length === 0 || state.filter.selectedSizes.includes(tovar.size); // Предполагается, что `tovar.size` - это доступный размер товара
// //   //   return isPriceValid && isSizeValid;
// //   // })
// //   if (state.filter) {
// //     return {
// //       data: state.data.filter(
// //       (tovar: { price: number; sizes: [] }) =>
// //         tovar.price >= state.filter.minPrice &&
// //         tovar.price <= state.filter.maxPrice &&
// //         tovar.sizes === state.filter.selectedSizes
// //     ),
// //     minPrice: state.minPrice,
// //     maxPrice: state.maxPrice,
// //     isLoading: state.isLoading,
// //     isError: state.isError,
// //     basket: state.basket,
// //     resultSum: state.resultSum,
// //     filter: state.filter,
// //   }
// //   } else {
// //     return {
// //       data: state.data,
// //       maxPrice: state.maxPrice,
// //       minPrice: state.minPrice,
// //       isLoading: state.isLoading,
// //       isError: state.isError,
// //       basket: state.basket,
// //       resultSum: state.resultSum,
// //       filter: state.filter,
// //     };
// //   }
// //   // const filter = state.sneakers.filter; // Замените на Ваше состояние фильтрации
// //   // if (filter.length === 0) {
// //   //   return state.sneakers.data; // Возвращаем все товары, если размер не выбран
// //   // }
// //   // return state.sneakers.data.filter((tovar: { size: any; }) => filter.includes(tovar.size));
// // };
