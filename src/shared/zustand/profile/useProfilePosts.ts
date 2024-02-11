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

  getFilteredPosts: () => Promise<IPost[]>;
  fetchPosts: () => void;

  curr_page: number;
  total: number;

  isMostLiked: boolean;
  isMostDisliked: boolean;
  isEarliestDate: boolean;

  handleMostLiked: () => void;
  handleMostDisliked: () => void;
  handleEarliestDate: () => void;

  mode: PostsMode;
  setMode: (mode: PostsMode) => void;

  moreHandle: () => void;
}

export const useProfilePosts = create<StoreState>()(
  immer((set, get) => ({
    posts: [],
    likes: 0,
    dislikes: 0,
    title: "",
    curr_page: 1,
    total: 0,
    isMostLiked: false,
    isMostDisliked: false,
    isEarliestDate: false,

    mode: "my",

    setMode: (mode: PostsMode) => {
      set((state) => {
        state.mode = mode;
      }),
        updatePosts();
    },

    handleEarliestDate: () => {
      set((state) => {
        state.isEarliestDate = !get().isEarliestDate;
      });
    },
    handleMostDisliked: () => {
      set((state) => {
        state.posts.sort((a, b) =>
          !get().isMostDisliked
            ? a.disliked_by.length - b.disliked_by.length
            : b.disliked_by.length - a.disliked_by.length
        );

        state.isMostDisliked = !get().isMostDisliked;
      });
    },

    handleMostLiked: () => {
      set((state) => {
        state.posts.sort((a, b) =>
          !get().isMostLiked
            ? a.liked_by.length - b.liked_by.length
            : b.liked_by.length - a.liked_by.length
        );
        state.isMostLiked = !get().isMostLiked;
      });
    },

    fetchPosts: async () => {
      const posts = await get().getFilteredPosts();

      set((state) => {
        state.posts = posts;
      });
    },

    handleDislikes: async (value: string) => {
      set((state) => {
        state.dislikes = handleNumberInput(value);
        state.curr_page = 1;
      });

      get().fetchPosts();
    },

    handleLikes: async (value: string) => {
      set((state) => {
        state.likes = handleNumberInput(value);
        state.curr_page = 1;
      });

      get().fetchPosts();
    },

    handleTitle: async (text: string) => {
      set((state) => {
        state.title = text;
        state.curr_page = 1;
      });

      const posts = await get().getFilteredPosts();

      set((state) => {
        state.posts = posts;
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
          ? `&user_id=${localStorage.getItem(nameLolalstorage)}`
          : "";

      const resultString =
        likesString + dislikesString + titleString + userIdString;

      const { data } = await apiBase.get(
        `/profile/posts?page=${get().curr_page}${resultString}`
      );

      set((state) => {
        state.total = Math.ceil(data.total / 5);
      });

      return data.data;
    },

    moreHandle: async () => {
      set((state) => {
        state.curr_page += 1;
      });

      const appendedPosts = get().posts.concat(await get().getFilteredPosts());

      set((state) => {
        state.posts = appendedPosts;
      });
    },
  }))
);

export const updatePosts = () => {
  useProfilePosts.getState().handleTitle("");
};
