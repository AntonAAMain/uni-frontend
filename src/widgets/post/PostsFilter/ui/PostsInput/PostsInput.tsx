import cn from "classnames";

import cls from "./PostsInput.module.scss";
import { HTMLInputTypeAttribute } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleValue: (value: string) => void;
  value: string | number;
  className?: string;
}

export const PostsInput = ({
  value,
  handleValue,
  className,
  ...props
}: Props) => {
  return (
    <input
      {...props}
      value={value}
      onChange={(e) => handleValue(e.target.value)}
      className={cn(cls.container, className)}
      type="text"
    />
  );
};
