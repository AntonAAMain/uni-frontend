import { useCommentsStore } from "@/shared/zustand/useCommentsStore";
import cls from "./Comments.module.scss";
import { NewComment } from "./NewComment/NewComment";
import { Post } from "./Post/Post";
import { useEffect } from "react";

const mokData = {
  userName: "Антон",
  text: "Привет!\n Как дела?",
};

interface Props {
  postId: number;
}

export const Comments = ({ postId }: Props) => {
  const { fetchComments, comments } = useCommentsStore();

  useEffect(() => {
    fetchComments(postId);
  }, [postId]);

  return (
    <div className={cls.container}>
      <div className={cls.title}>Комментарии</div>

      <NewComment postId={postId} />

      <div className={cls.comments}>
        {comments.map((comment) => (
          <Post
            key={comment.id}
            userName={comment.user_name}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};
