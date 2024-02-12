import cls from "./Post.module.scss";

interface Props {
  text: string;
  userName: string;
}

export const Post = ({ text, userName }: Props) => {
  return (
    <div className={cls.container}>
      <div className={cls.top}>{userName}</div>

      <div className={cls.text}>{text.split("\\n").join("\n")}</div>
    </div>
  );
};
