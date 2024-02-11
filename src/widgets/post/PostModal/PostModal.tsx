"use client";

import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import { ModalWrapper } from "@/shared/ui/ModalWrapper/ModalWrapper";
import { Bottom } from "./Bottom/Bottom";
import { Body } from "./Body/Body";
import { Top } from "./ui/Top/Top";

import cls from "./PostModal.module.scss";

export const PostModal = () => {
  const { setIsActive, isActive } = useProfilePostModalStore();

  return (
    <ModalWrapper
      className={cls.modalWrapper}
      active={isActive}
      close={() => setIsActive(false)}
    >
      <div className={cls.container}>
        <Top />
        <Body />
        <Bottom />
      </div>
    </ModalWrapper>
  );
};
