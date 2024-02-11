import { IPost } from "@/shared/types/post";
import cls from "./PostCard.module.scss";
import Image from "next/image";

interface Props {
  post: IPost;
}

export const PostCard = ({ post }: Props) => {
  return (
    <div className={cls.container}>
      <div className={cls.date}>Создан {post.date.toString().slice(0, 10)}</div>
      <div className={cls.title}>{post.title}</div>
      <div className={cls.bottom}>
        <div className={cls.bottomPart}>
          <Image src={"/images/ui/like.png"} width={30} height={30} alt="" />{" "}
          {post.likes}
        </div>
        <div className={cls.bottomPart}>
          <Image src={"/images/ui/dislike.png"} width={30} height={30} alt="" />{" "}
          {post.dislikes}
        </div>
      </div>
    </div>
  );
};
