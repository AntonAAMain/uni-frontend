import cn from "classnames";

import cls from "./AuthInput.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleValue: (value: string) => void;
  className?: string;
}

export const AuthInput = ({
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
    />
  );
};
