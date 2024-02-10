import cls from "./AuthButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const AuthButton = ({ className, children, ...props }: Props) => {
  return (
    <button {...props} className={cls.container}>
      {children}
    </button>
  );
};
