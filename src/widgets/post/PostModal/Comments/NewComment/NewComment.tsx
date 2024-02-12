import { useCommentsStore } from "@/shared/zustand/useCommentsStore";
import { useState } from "react";

import cls from "./NewComment.module.scss";

interface Props {
  postId: number;
}

export const NewComment = ({ postId }: Props) => {
  const { textarea, handleTextarea, createComment } = useCommentsStore();

  return (
    <div className={cls.container}>
      <textarea
        className={cls.textarea}
        value={textarea.split("\\n").join("\n")}
        onChange={(e) => handleTextarea(e.target.value)}
        placeholder="Напишите комментарий"
      ></textarea>

      <div onClick={() => createComment(postId)} className={cls.createBtn}>
        Создать комментарий
      </div>
    </div>
  );
};
