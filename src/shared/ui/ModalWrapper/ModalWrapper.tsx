import cn from "classnames";

import cls from "./ModalWrapper.module.scss";
import React from "react";

interface Props {
  active: boolean;
  close: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ModalWrapper = ({ active, close, children, className }: Props) => {
  return (
    <div
      onClick={close}
      className={cn(cls.container, { [cls.container_active]: active })}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(cls.content, className)}
      >
        {children}
      </div>
    </div>
  );
};
