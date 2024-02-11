import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { PostsInput } from "../../ui/PostsInput/PostsInput";

import cls from "./LikesInput.module.scss";

export const LikesInput = () => {
  const { likes, handleLikes } = useProfilePosts();

  return (
    <PostsInput
      className={cls.container}
      placeholder="Заголовок поста"
      value={likes}
      handleValue={handleLikes}
    />
  );
};
