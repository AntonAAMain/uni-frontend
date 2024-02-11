import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { SortButton } from "../../ui/SortButton/SortButton";
import cls from "./LikesSort.module.scss";

export const LikesSort = () => {
  const { isMostLiked, handleMostLiked } = useProfilePosts();

  return (
    <SortButton onClick={handleMostLiked}>
      {isMostLiked ? "Most liked by asc" : "Most liked by desc"}
    </SortButton>
  );
};
