"use client";

import { MainLayout } from "@/widgets/layout/MainLayout/MainLayout";
import { UserInfo } from "@/widgets/profile/UserInfo/UserInfo";
import { PostsFilter } from "@/widgets/post/PostsFilter/PostsFilter";
import { PostsList } from "@/widgets/post/PostsList/PostsList";

import cls from "./page.module.scss";

export default function Profile() {
  return (
    <MainLayout>
      <div className={cls.container}>
        <UserInfo />
        <PostsFilter />
        <PostsList />
      </div>
    </MainLayout>
  );
}
