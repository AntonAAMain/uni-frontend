import { useProfilePosts } from "@/shared/zustand/profile/useProfilePosts";
import { SortButton } from "../../ui/SortButton/SortButton";

import cls from "./Date.module.scss";

export const Date = () => {
  const { isEarliestDate, handleEarliestDate } = useProfilePosts();

  return (
    <SortButton onClick={handleEarliestDate}>
      {isEarliestDate ? "Most earliest by asc" : "Most earliest by desc"}
    </SortButton>
  );
};
