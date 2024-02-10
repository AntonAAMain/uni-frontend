import cls from "./PostModalInput.module.scss";

export const PostModalInput = () => {
  return (
    <input placeholder="Заголовок поста" className={cls.input} type="text" />
  );
};
