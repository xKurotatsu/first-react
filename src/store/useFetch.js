import { create } from "zustand";

export const useFetch = create((set) => ({
  product: [],
  fetchData: async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      set({ product: data.products });
    } catch (error) {
      console.log("Something went wrong");
    }
  },
}));

export const useFetchTodo = create((set) => ({
  todo: [],
  fetchTodo: async () => {
    try {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      set({ todo: data.todos });
      console.log(data);
    } catch (error) {
      console.log("Something error");
    }
  },
}));
