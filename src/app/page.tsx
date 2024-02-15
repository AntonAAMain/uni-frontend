"use client";

import { AuthCheck } from "@/features/AuthCheck/AuthCheck";
import { AuthCheckLogin } from "@/features/AuthCheck/AuthCheckLogin";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { MainLayout } from "@/widgets/layout/MainLayout/MainLayout";
import { PostsFilter } from "@/widgets/post/PostsFilter/PostsFilter";
import { PostsList } from "@/widgets/post/PostsList/PostsList";

export default function Home() {
  const { isLoading, checkIsAuth } = useAuthCheckStore();

  return (
    <>
      <AuthCheckLogin />
      {isLoading ? (
        <div className={"loader"}>Загрузка</div>
      ) : (
        <MainLayout>
          <PostsFilter mode="others" />
          <PostsList />
        </MainLayout>
      )}
    </>
  );
}
