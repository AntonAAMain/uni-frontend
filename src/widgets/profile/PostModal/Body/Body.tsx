import { PostModalInput } from "../ui/PostModalInput/PostModalInput";
import { PostModalText } from "../ui/PostModalText/PostModalText";

import cls from "./Body.module.scss";

export const Body = () => {
  return (
    <div className={cls.container}>
      <PostModalInput />
      <PostModalText />
    </div>
  );
};
