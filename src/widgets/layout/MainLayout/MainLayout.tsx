import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import cls from "./MainLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div style={{ border: "2px solid green" }} className={cls.container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
