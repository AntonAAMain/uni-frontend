import {
  PostsMode,
  useProfilePosts,
} from "@/shared/zustand/profile/useProfilePosts";
import { Date } from "./entities/Date/Date";
import { DislikesInput } from "./entities/DislikesInput/DislikesInput";
import { DislikesSort } from "./entities/DislikesSort/DislikesSort";
import { LikesInput } from "./entities/LikesInput/LikesInput";
import { LikesSort } from "./entities/LikesSort/LikesSort";
import { TitleInput } from "./entities/TitleInput/TitleInput";

import cls from "./PostsFilter.module.scss";
import { useEffect } from "react";

interface Props {
  mode: PostsMode;
}

export const PostsFilter = ({ mode }: Props) => {
  const { setMode } = useProfilePosts();

  useEffect(() => {
    setMode(mode);
  }, [mode]);

  return (
    <div className={cls.container}>
      <div className={cls.inputs}>
        <TitleInput />
        <LikesInput />
        <DislikesInput />
      </div>

      <div className={cls.boxes}>
        <LikesSort />
        <DislikesSort />
      </div>
    </div>
  );
};
