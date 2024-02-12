"use client";

import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import { ModalWrapper } from "@/shared/ui/ModalWrapper/ModalWrapper";
import { Bottom } from "./Bottom/Bottom";
import { Body } from "./Body/Body";
import { Comments } from "./Comments/Comments";
import { Top } from "./ui/Top/Top";

import cls from "./PostModal.module.scss";

export const PostModal = () => {
  const { setIsActive, isActive, mode, postId } = useProfilePostModalStore();

  return (
    <ModalWrapper
      className={cls.modalWrapper}
      active={isActive}
      close={() => setIsActive(false)}
    >
      <div className={cls.container}>
        <Top />
        <Body />
        {mode !== "view" && <Bottom />}
      </div>

      <Comments postId={postId} />
    </ModalWrapper>
  );
};
