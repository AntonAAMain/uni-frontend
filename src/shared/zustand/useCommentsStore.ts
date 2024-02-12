import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { apiBase } from "../http";
import { openAlert } from "./useAlertStore";
import axios from "axios";
import { nameLolalstorage } from "../consts";
import { IComment } from "../types/comments";

interface StoreState {
  textarea: string;
  handleTextarea: (value: string) => void;

  comments: IComment[];

  createComment: (postId: number) => void;
  fetchComments: (postId: number) => void;
}

export const useCommentsStore = create<StoreState>()(
  immer((set, get) => ({
    textarea: "",
    handleTextarea: (value: string) =>
      set((state) => {
        state.textarea = value;
      }),

    comments: [],

    createComment: async (postId: number) => {
      const userId = parseInt(localStorage.getItem(nameLolalstorage) as string);

      await apiBase
        .post("comment", {
          text: get().textarea,
          userId: userId,
          userName: "test name",
          postId: postId,
        })
        .then(({ data }) => {
          set((state) => {
            state.textarea = "";
          });

          get().fetchComments(postId);
        });
    },

    fetchComments: async (postId: number) => {
      await apiBase.get(`comments/${postId}`).then(({ data }) => {
        set((state) => {
          state.comments = data.data;
        });
      });
    },
  }))
);
