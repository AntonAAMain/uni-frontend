import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { PostCard } from "./entities/PostCard/PostCard";
import { useEffect } from "react";
import cn from "classnames";

import cls from "./PostsList.module.scss";
import { MoreButton } from "./entities/MoreButton/MoreButton";

export const PostsList = () => {
  const { getFilteredPosts, posts, curr_page, total, moreHandle } =
    useProfilePosts();

  useEffect(() => {
    getFilteredPosts();
  }, []);

  return (
    <div className={cn(cls.container, "defaultContainer")}>
      <div className={cls.list}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
      <MoreButton />
    </div>
  );
};
