import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { apiBase } from "../http";
import { openAlert } from "./useAlertStore";
import axios from "axios";
import { nameLolalstorage } from "../consts";

interface StoreState {
  name: string;
  password: string;
  repeatPassword: string;

  handleName: (name: string) => void;
  handlePassword: (password: string) => void;
  handleRepeatPassword: (repeatPassword: string) => void;

  login: () => Promise<boolean>;
  register: () => Promise<boolean>;
}

export const useAuthStore = create<StoreState>()(
  immer((set, get) => ({
    name: "",
    handleName: (name: string) =>
      set((state: StoreState) => {
        state.name = name;
      }),

    password: "",
    handlePassword: (password: string) =>
      set((state: StoreState) => {
        state.password = password;
      }),

    repeatPassword: "",

    handleRepeatPassword: (repeatPassword: string) =>
      set((state: StoreState) => {
        state.repeatPassword = repeatPassword;
      }),

    login: async () => {
      try {
        const { data } = await apiBase.post("login", {
          name: get().name,
          password: get().password,
        });

        localStorage.setItem(nameLolalstorage, get().name);

        openAlert("success", "Вы успешно зашли");
        return true;
      } catch (error) {
        openAlert("dangerous", "Такой пользователь не найден");
        return false;
      }
    },
    register: async () => {
      try {
        const { data } = await apiBase.post("register", {
          name: get().name,
          password: get().password,
        });

        set((state) => {
          state.name = "";
          state.password = "";
          state.repeatPassword = "";
        });
        openAlert("success", "Вы зарегестрированы!");

        return true;
      } catch (error) {
        openAlert("warning", "Такое имя уже занято");

        return false;
      }
    },
  }))
);
