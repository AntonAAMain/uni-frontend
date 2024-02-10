import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

type IAlertType = "success" | "warning" | "dangerous";

interface StoreState {
  type: IAlertType | null;
  text: string | null;
  isActive: boolean;

  openAlert: (type: IAlertType, text: string) => void;
  closeAlert: () => void;
}

export const useAlertStore = create<StoreState>()(
  immer((set, get) => ({
    type: null,
    text: null,
    isActive: false,

    closeAlert: () =>
      set((state) => {
        state.isActive = false;
      }),

    openAlert: (type: IAlertType, text: string) =>
      set((state) => {
        state.type = type;
        state.text = text;
        state.isActive = true;
      }),
  }))
);

export const openAlert = (type: IAlertType, text: string) => {
  useAlertStore.getState().openAlert(type, text);
};
