"use client";

import { nameLolalstorage } from "@/shared/consts";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AuthCheckLogin = () => {
  const router = useRouter();

  const { checkIsAuth, finishLoading, setAuth } = useAuthCheckStore();

  useEffect(() => {
    if (checkIsAuth()) {
      router.push("/auth/login");
      setAuth(false);
    } else {
      setAuth(true);
    }

    setTimeout(() => {
      finishLoading();
    }, 1000);
  }, []);

  return <></>;
};
