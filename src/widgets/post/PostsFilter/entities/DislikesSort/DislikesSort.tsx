import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { SortButton } from "../../ui/SortButton/SortButton";

import cls from "./DislikesSort.module.scss";

export const DislikesSort = () => {
  const { isMostDisliked, handleMostDisliked } = useProfilePosts();

  return (
    <SortButton onClick={handleMostDisliked}>
      {isMostDisliked ? "Most disliked by asc" : "Most disliked by desc"}
    </SortButton>
  );
};
