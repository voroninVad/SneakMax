// Импортируем функции createAsyncThunk и createSlice из библиотеки Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Импортируем библиотеку axios для выполнения HTTP-запросов
import axios from "axios";
import { Basket } from "../../types";



// Определяем базовый URL для API
const BASE_URL: string = "https://bf7ccd25bc81ee40.mokky.dev";

// Создаем асинхронный экшен для получения корзины
export const fetchBasket = createAsyncThunk<Basket[]>(
  
  "basket/", // Название экшена
  async (): Promise<Basket[]> => { // Асинхронная функция, возвращающая массив кроссовок
    try {
      // Выполняем GET-запрос к API для получения данных корзины
      const { data } = await axios.get<Basket[]>(`${BASE_URL}/basket/`);

      return data; // Возвращаем полученные данные
    } catch (error) {
      console.log("Failed to fetch:"); // Логируем ошибку, если запрос не удался
      return []; // Возвращаем пустой массив в случае ошибки
    }
  }
);

// Создаем асинхронный экшен для добавления кроссовка в корзину
export const postBasket = createAsyncThunk<Basket, Basket>(
  "basket/postBasket", // Название экшена
  async (item) => { // Принимаем объект кроссовка для добавления
    try {
      // Выполняем POST-запрос к API для добавления кроссовка в корзину
      const { data } = await axios.post(`${BASE_URL}/basket`, item);

      return data; // Возвращаем добавленный объект кроссовка
    } catch (error) {
      throw new Error("Failed to post basket"); // Генерируем ошибку при неудаче
    }
  }
);

// Создаем асинхронный экшен для удаления кроссовка из корзины
export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket", // Название экшена
  async (id) => { // Принимаем идентификатор кроссовка для удаления
    try {
      // Выполняем DELETE-запрос к API для удаления кроссовка из корзины
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id; // Возвращаем идентификатор удаленного кроссовка
    } catch (error) {
      throw new Error("Failed to delete basket"); // Генерируем ошибку при неудаче
    }
  }
);

export const clearBasket = createAsyncThunk('basket/clearBasket', async (): Promise<[]>  => {
  try {
    // Выполняем DELETE-запрос к API для очистки корзины
    await axios.patch(`${BASE_URL}/basket/`);
    return [];
  } catch (error) {
    throw new Error("Failed to delete basket"); // Генерируем ошибку при неудаче
  }
});

// Определяем интерфейс состояния корзины
interface IState {
  data: Basket[]; // Массив кроссовок в состоянии корзины
  resultSum: number,
}

// Начальное состояние корзины
const initialState: IState = {
  data: [],
  resultSum: 0
};

// Создаем срез состояния для корзины с помощью createSlice
export const basketSlice = createSlice({
  name: "basket", // Имя среза состояния
  initialState,   // Начальное состояние
  reducers: {},   // Редьюсеры не используются, так как все действия асинхронные
  extraReducers: (builder) => { // Обрабатываем дополнительные редьюсеры для асинхронных действий
    // Обработка успешного выполнения fetchBasket
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload; // Обновляем состояние данными из payload
      state.data.map(item => 
        state.resultSum += item.price)
    });

    // Обработка успешного выполнения postBasket
    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload); // Добавляем новый элемент в массив данных
      state.resultSum += action.payload.price
    });

    // Обработка успешного выполнения delBasket
    builder.addCase(delBasket.fulfilled, (state, action) => {
      const Tovar = state.data.find((tovar:Basket) => tovar.id == action.payload);
      if (Tovar) {
        state.resultSum -= Tovar.price;
      }
      state.data = state.data.filter((el) => el.id !== action.payload); // Удаляем элемент по id из массива данных
    });
    builder.addCase(clearBasket.fulfilled, (state, action) => {
      state.data = []; // Очищаем массив товаров
      console.log(action.payload)
      state.resultSum = 0; // Обнуляем общую сумму
    });
  },
});

// Экспортируем редьюсер среза состояния по умолчанию
export default basketSlice.reducer;
