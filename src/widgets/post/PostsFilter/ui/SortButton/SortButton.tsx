import cn from "classnames";

import cls from "./SortButton.module.scss";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const SortButton = ({ children, className, ...props }: Props) => {
  return (
    <button {...props} className={cn(cls.container, className)}>
      {children}
    </button>
  );
};
