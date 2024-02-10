"use client";

import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import { ModalWrapper } from "@/shared/ui/ModalWrapper/ModalWrapper";
import { Top } from "./ui/Top/Top";

import cls from "./PostModal.module.scss";
import { Body } from "./Body/Body";
import { Bottom } from "./Bottom/Bottom";

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
