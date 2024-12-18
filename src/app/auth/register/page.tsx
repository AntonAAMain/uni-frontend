"use client";

import { AuthCheck } from "@/features/AuthCheck/AuthCheck";
import { RegistrationForm } from "@/features/auth/Registration/RegistrationForm";
import { useAuthCheckStore } from "@/shared/zustand/useAuthCheckStore";

export default function Register() {
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
      {isLoading ? "Загрузка" : <RegistrationForm />}
    </main>
  );
}
