"use client";

import { AuthCheck } from "@/features/AuthCheck/AuthCheck";
import { LoginForm } from "@/features/auth/Login/LoginForm";
import { AuthInput } from "@/features/auth/ui/AuthInput/AuthInput";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";
import { useState } from "react";

export default function Login() {
  const { isLoading } = useAuthCheckStore();

  return (
    <main style={{ left: "500px", position: "relative", paddingTop: "100px" }}>
      <AuthCheck />
      {isLoading ? "Загрузка" : <LoginForm />}
    </main>
  );
}
