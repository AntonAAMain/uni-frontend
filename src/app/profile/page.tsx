"use client";

import { MainLayout } from "@/widgets/layout/MainLayout/MainLayout";
import { UserInfo } from "@/widgets/profile/UserInfo/UserInfo";
import { PostsFilter } from "@/widgets/post/PostsFilter/PostsFilter";
import { PostsList } from "@/widgets/post/PostsList/PostsList";

import cls from "./page.module.scss";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { AuthCheckLogin } from "@/features/AuthCheck/AuthCheckLogin";

export default function Profile() {
  const { isLoading, checkIsAuth } = useAuthCheckStore();

  return (
    <>
      <AuthCheckLogin />
      {isLoading ? (
        "Загрузка"
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
