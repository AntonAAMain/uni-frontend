import cls from "./PostModalText.module.scss";

export const PostModalText = () => {
  return (
    <textarea
      placeholder="Текст поста"
      className={cls.textarea}
      name=""
      id=""
    ></textarea>
  );
};
