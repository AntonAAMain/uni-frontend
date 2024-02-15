import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { nameLolalstorage } from "../consts";
import { useRouter } from "next/navigation";

interface StoreState {
  isLoading: boolean;
  checkIsAuth: () => boolean;
  finishLoading: () => void;
  isAuth: boolean;

  setAuth: (condition: boolean) => void;
}

export const useAuthCheckStore = create<StoreState>()(
  immer((set, get) => ({
    isLoading: true,
    isAuth: false,

    setAuth: (condition: boolean) =>
      set((state) => {
        state.isAuth = condition;
      }),

    checkIsAuth: () => {
      if (!get().isAuth) {
        set((state) => {
          state.isLoading = true;
        });
      }

      const id = parseInt(localStorage.getItem(nameLolalstorage) as string);

      return Number.isNaN(id);
    },

    finishLoading: () => {
      set((state) => {
        state.isLoading = false;
      });
    },
  }))
);
