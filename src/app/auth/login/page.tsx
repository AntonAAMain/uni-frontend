"use client";

import { AuthCheck } from "@/features/AuthCheck/AuthCheck";
import { LoginForm } from "@/features/auth/Login/LoginForm";
import { AuthInput } from "@/features/auth/ui/AuthInput/AuthInput";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { useState } from "react";

export default function Login() {
  const { isLoading } = useAuthCheckStore();

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <AuthCheck />
      {isLoading ? <div className="loader">Загрузка</div> : <LoginForm />}
    </main>
  );
}
