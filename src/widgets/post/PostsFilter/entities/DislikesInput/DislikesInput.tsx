import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { PostsInput } from "../../ui/PostsInput/PostsInput";

import cls from "./DislikesInput.module.scss";

export const DislikesInput = () => {
  const { dislikes, handleDislikes } = useProfilePosts();

  return (
    <PostsInput
      className={cls.container}
      placeholder="Заголовок поста"
      value={dislikes}
      handleValue={handleDislikes}
    />
  );
};
