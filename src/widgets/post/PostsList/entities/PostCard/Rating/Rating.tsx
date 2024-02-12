import { IPost } from "@/shared/types/post";
import cn from "classnames";
import Image from "next/image";

import cls from "./Rating.module.scss";
import { useEffect, useLayoutEffect, useState } from "react";
import { nameLolalstorage } from "@/shared/consts";
import { apiBase } from "@/shared/http";
import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";

interface Props {
  post: IPost;
}

interface LocalRating {
  isTakenPart: boolean;
  count: number;
}

export const Rating = ({ post }: Props) => {
  const [localLike, setLocalLike] = useState<LocalRating>({
    isTakenPart: false,
    count: 0,
  });

  const [localDislike, setLocalDislike] = useState<LocalRating>({
    isTakenPart: false,
    count: 0,
  });

  const userId = parseInt(localStorage.getItem(nameLolalstorage) as string);

  const { mode: postsMode } = useProfilePosts();

  useLayoutEffect(() => {
    setLocalLike({
      isTakenPart: post.liked_by.includes(userId),
      count: post.liked_by.length,
    });

    setLocalDislike({
      isTakenPart: post.disliked_by.includes(userId),
      count: post.disliked_by.length,
    });
  }, []);

  const handleLike = async () => {
    if (postsMode === "others") {
      const mode = localLike.isTakenPart ? "remove" : "append";

      await apiBase
        .post("post/rate", {
          postId: post.id,
          userId: userId,
          type: "liked_by",
          mode: mode,
        })
        .then(() => {
          setLocalLike((prev) => ({
            count: localLike.isTakenPart ? prev.count - 1 : prev.count + 1,
            isTakenPart: !prev.isTakenPart,
          }));
        });
    }
  };

  const handleDislike = async () => {
    if (postsMode === "others") {
      const mode = localDislike.isTakenPart ? "remove" : "append";

      await apiBase
        .post("post/rate", {
          postId: post.id,
          userId: userId,
          type: "disliked_by",
          mode: mode,
        })
        .then(() => {
          setLocalDislike((prev) => ({
            count: localDislike.isTakenPart ? prev.count - 1 : prev.count + 1,
            isTakenPart: !prev.isTakenPart,
          }));
        });
    }
  };

  return (
    <div className={cls.bottom}>
      <div onClick={handleLike} className={cls.bottomPart}>
        <Image src={"/images/ui/like.png"} width={30} height={30} alt="" />
        <p
          className={cn(cls.count, {
            [cls.isTakenPart]: localLike.isTakenPart,
          })}
        >
          {localLike.count}
        </p>
      </div>
      <div onClick={handleDislike} className={cls.bottomPart}>
        <Image src={"/images/ui/dislike.png"} width={30} height={30} alt="" />{" "}
        <p
          className={cn(cls.count, {
            [cls.isTakenPart]: localDislike.isTakenPart,
          })}
        >
          {localDislike.count}
        </p>
      </div>
    </div>
  );
};
