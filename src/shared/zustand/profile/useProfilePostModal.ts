import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { apiBase } from "@/shared/http";
import { nameLolalstorage } from "@/shared/consts";
import { openAlert } from "../useAlertStore";
import { updatePosts } from "./useProfilePosts";
import { updateUser } from "../useUserStore";

type IMode = "create" | "edit" | "view";

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

  postId: number;
  setPostId: (value: number) => void;

  reset: () => void;
  deletePost: () => void;
}

export const useProfilePostModalStore = create<StoreState>()(
  immer((set, get) => ({
    title: "",
    handleTitle: (title: string) =>
      set((state) => {
        state.title = title;
      }),

    deletePost: async () => {
      await apiBase
        .post("profile/post/delete", {
          postId: get().postId,
        })
        .then(() => {
          get().reset();
          updatePosts();
          openAlert("success", "Пост был удален");
          updateUser();
        });
    },

    reset: () =>
      set((state) => {
        state.title = "";
        state.text = "";
        state.isActive = false;
      }),

    postId: 0,
    setPostId: (value: number) =>
      set((state) => {
        state.postId = value;
      }),

    text: "",
    handleText: (text: string) =>
      set((state) => {
        state.text = text.split("\n").join("\\n");
      }),

    isActive: false,
    setIsActive: (condition: boolean) => {
      set((state) => {
        state.isActive = condition;
      });
    },

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
            updateUser();
            updatePosts();
          });
      } else if (get().mode === "edit") {
        await apiBase
          .patch("/profile/post/update", {
            postId: get().postId,
            title: get().title,
            text: get().text,
          })
          .then(() => {
            get().reset();
            openAlert("success", "Пост был изменен!");
          })
          .catch(() => {
            openAlert("dangerous", "Произошла ошибка");
          })
          .finally(() => {
            updatePosts();
          });
      }
    },
  }))
);
