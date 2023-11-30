import { configureStore } from "@reduxjs/toolkit";
import audio from "./audioSlice";

export const store = configureStore({
  reducer: { audio },
});

/*чтобы не перечислять все типы слайсов, 
заказываем у редакса весь стейт, получаем его тип (как функцию), 
returnType ковертирует эту функцию в тип*/
export type RootState = ReturnType<typeof store.getState>;
