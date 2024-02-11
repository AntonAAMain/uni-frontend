import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { apiBase } from "@/shared/http";
import { nameLolalstorage } from "@/shared/consts";
import { openAlert } from "../useAlertStore";

type IMode = "create" | "edit";

interface StoreState {
  title: string;
  handleTitle: (title: string) => void;

  text: string;
  handleText: (text: string) => void;

  isActive: boolean;
  setIsActive: (condition: boolean) => void;

  mode: IMode;
  setMode: (mode: IMode) => void;

  submitHandle: () => void;
}

export const useProfilePostModalStore = create<StoreState>()(
  immer((set, get) => ({
    title: "",
    handleTitle: (title: string) =>
      set((state) => {
        state.title = title;
      }),

    text: "",
    handleText: (text: string) =>
      set((state) => {
        state.text = text.split("\n").join("\\n");
      }),

    isActive: false,
    setIsActive: (condition: boolean) =>
      set((state) => {
        state.isActive = condition;
      }),

    mode: "create",

    setMode: (mode: IMode) =>
      set((state) => {
        state.mode = mode;
      }),

    submitHandle: async () => {
      const user_id = parseInt(
        localStorage.getItem(nameLolalstorage) as string
      );

      if (get().mode === "create") {
        apiBase
          .post("/profile/post", {
            title: get().title,
            text: get().text,
            user_id: user_id,
          })
          .then(() => {
            set((state) => {
              state.isActive = false;
            });
            openAlert("success", "Пост был успешно создан");
          });
      }
    },
  }))
);
