import { MainLayout } from "@/widgets/layout/MainLayout/MainLayout";
import { UserInfo } from "@/widgets/profile/UserInfo/UserInfo";

import cls from "./page.module.scss";

export default function Profile() {
  return (
    <MainLayout>
      <div className={cls.container}>
        <UserInfo />
      </div>
    </MainLayout>
  );
}
