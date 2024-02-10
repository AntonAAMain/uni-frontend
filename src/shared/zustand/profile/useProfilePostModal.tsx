import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

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
        state.text = text;
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
  }))
);
