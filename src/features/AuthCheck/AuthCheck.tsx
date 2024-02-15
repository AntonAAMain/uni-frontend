"use client";

import { nameLolalstorage } from "@/shared/consts";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthCheck = () => {
  const router = useRouter();

  const { checkIsAuth, finishLoading, setAuth } = useAuthCheckStore();

  useEffect(() => {
    if (!checkIsAuth()) {
      setAuth(true);
      router.push("/");
    } else {
      setAuth(false);
    }

    setTimeout(() => {
      finishLoading();
    }, 1000);
  }, []);

  return <></>;
};
