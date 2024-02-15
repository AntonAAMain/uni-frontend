import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { apiBase } from "../http";
import { openAlert } from "./useAlertStore";
import axios from "axios";
import { nameLolalstorage } from "../consts";
import { IComment } from "../types/comments";

interface User {
  id: number;
  name: string;
  password: string;
  register_date: string;
}

interface StoreState {
  user: User | null;
  postsLength: number;

  fetchUser: () => void;
}

export const useUserStore = create<StoreState>()(
  immer((set, get) => ({
    user: null,
    postsLength: 0,

    fetchUser: async () => {
      const userId = parseInt(localStorage.getItem(nameLolalstorage) as string);

      await apiBase.get(`user/info/${userId}`).then(({ data }) => {
        set((state) => {
          state.postsLength = data.posts;
          state.user = data.data;
        });
      });
    },
  }))
);

export const updateUser = () => {
  useUserStore.getState().fetchUser();
};
