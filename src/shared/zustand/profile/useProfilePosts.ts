import { immer } from "zustand/middleware/immer";
import { IPost } from "@/shared/types/post";
import { apiBase } from "@/shared/http";
import { create } from "zustand";
import { handleNumberInput } from "@/shared/helpers";
import { nameLolalstorage } from "@/shared/consts";

export type PostsMode = "my" | "others";

interface StoreState {
  posts: IPost[];

  likes: number;
  handleLikes: (value: string) => void;

  dislikes: number;
  handleDislikes: (value: string) => void;

  title: string;
  handleTitle: (text: string) => void;

  getFilteredPosts: () => void;

  curr_page: number;
  total: number;

  isMostLiked: boolean;
  isMostDisliked: boolean;
  isEarliestDate: boolean;

  handleMostLiked: () => void;
  handleMostDisliked: () => void;
  handleEarliestDate: () => void;

  mode: PostsMode;
  setMode: (mode: PostsMode) => {};
}

export const useProfilePosts = create<StoreState>()(
  immer((set, get) => ({
    posts: [],
    likes: 0,
    dislikes: 0,
    title: "",
    curr_page: 1,
    total: 0,
    isMostDisliked: false,
    isMostLiked: false,
    isEarliestDate: false,

    mode: "my",

    setMode: (mode: PostsMode) =>
      set((state) => {
        state.mode = mode;
      }),

    handleEarliestDate: () => {
      set((state) => {
        state.isEarliestDate = !get().isEarliestDate;
      });
    },
    handleMostDisliked: () => {
      set((state) => {
        state.isMostDisliked = !get().isMostDisliked;
      });
    },

    handleMostLiked: () => {
      set((state) => {
        state.isMostLiked = !get().isMostLiked;
      });
    },

    handleDislikes: (value: string) => {
      set((state) => {
        state.dislikes = handleNumberInput(value);
      });
    },

    handleLikes: (value: string) => {
      set((state) => {
        state.likes = handleNumberInput(value);
      });
    },

    handleTitle: (text: string) => {
      set((state) => {
        state.title = text;
      });
    },

    getFilteredPosts: async () => {
      const likesString = get().likes !== 0 ? `&likes=${get().likes}` : "";
      const dislikesString =
        get().dislikes !== 0 ? `&dislikes=${get().dislikes}` : "";
      const titleString =
        get().title.length !== 0 ? `&title=${get().title}` : "";

      const userIdString =
        get().mode === "my"
          ? `user_id=${localStorage.getItem(nameLolalstorage)}`
          : "";

      const resultString =
        likesString + dislikesString + titleString + userIdString;

      const { data } = await apiBase.get(
        `/profile/posts?page=${get().curr_page}${resultString}`
      );

      set((state) => {
        state.posts = data.data;
      });
    },
  }))
);
