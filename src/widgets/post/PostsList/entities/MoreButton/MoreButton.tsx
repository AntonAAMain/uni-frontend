import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import cls from "./MoreButton.module.scss";

export const MoreButton = () => {
  const { moreHandle, total, curr_page } = useProfilePosts();

  return (
    <>
      {curr_page + 1 <= total && (
        <div onClick={moreHandle} className={cls.container}>
          Еще
        </div>
      )}
    </>
  );
};
