"use client";

import { MainLayout } from "@/widgets/layout/MainLayout/MainLayout";
import { PostsFilter } from "@/widgets/post/PostsFilter/PostsFilter";
import { PostsList } from "@/widgets/post/PostsList/PostsList";

export default function Home() {
  return (
    <MainLayout>
      <PostsFilter mode="others" />
      <PostsList />
    </MainLayout>
  );
}
