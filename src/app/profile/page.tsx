"use client";

import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { MainLayout } from "@/widgets/layout/MainLayout/MainLayout";
import { PostsFilter } from "@/widgets/post/PostsFilter/PostsFilter";
import { AuthCheckLogin } from "@/features/AuthCheck/AuthCheckLogin";
import { UserInfo } from "@/widgets/profile/UserInfo/UserInfo";
import { PostsList } from "@/widgets/post/PostsList/PostsList";

import cls from "./page.module.scss";

export default function Profile() {
  const { isLoading, checkIsAuth } = useAuthCheckStore();

  return (
    <>
      <AuthCheckLogin />
      {isLoading ? (
        <div className={cls.loader}>Загрузка</div>
      ) : (
        <MainLayout>
          <div className={cls.container}>
            <UserInfo />
            <PostsFilter mode="my" />
            <PostsList />
          </div>
        </MainLayout>
      )}
    </>
  );
}
