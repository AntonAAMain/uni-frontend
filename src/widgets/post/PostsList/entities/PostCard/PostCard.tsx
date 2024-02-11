import { IPost } from "@/shared/types/post";
import cls from "./PostCard.module.scss";
import Image from "next/image";
import { apiBase } from "@/shared/http";
import { nameLolalstorage } from "@/shared/consts";
import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";

interface Props {
  post: IPost;
}

export const PostCard = ({ post }: Props) => {
  const { mode: postsMode } = useProfilePosts();

  const { setIsActive, setMode, handleText, handleTitle } =
    useProfilePostModalStore();

  const openModal = () => {
    handleTitle(post.title);
    handleText(post.text);
    postsMode === "my" ? setMode("edit") : setMode("view");
    setIsActive(true);
  };

  return (
    <div className={cls.container}>
      <div className={cls.date}>Создан {post.date.toString().slice(0, 10)}</div>
      <div onClick={openModal} className={cls.title}>
        {post.title}
      </div>
      <div className={cls.bottom}>
        <div className={cls.bottomPart}>
          <Image src={"/images/ui/like.png"} width={30} height={30} alt="" />{" "}
          {post.liked_by.length}
        </div>
        <div className={cls.bottomPart}>
          <Image src={"/images/ui/dislike.png"} width={30} height={30} alt="" />{" "}
          {post.disliked_by.length}
        </div>
      </div>
    </div>
  );
};
