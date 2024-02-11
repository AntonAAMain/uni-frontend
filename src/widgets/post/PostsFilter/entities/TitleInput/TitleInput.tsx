import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { PostsInput } from "../../ui/PostsInput/PostsInput";

import cls from "./TitleInput.module.scss";

export const TitleInput = () => {
  const { title, handleTitle } = useProfilePosts();

  return (
    <PostsInput
      placeholder="Заголовок поста"
      value={title}
      handleValue={handleTitle}
    />
  );
};
