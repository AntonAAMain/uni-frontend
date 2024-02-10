"use client";

import { LoginForm } from "@/features/auth/Login/LoginForm";
import { AuthInput } from "@/features/auth/ui/AuthInput/AuthInput";
import { useState } from "react";

export default function Login() {
  const [test, setTest] = useState<string>("placeholder");

  return (
    <main style={{ left: "500px", position: "relative", paddingTop: "100px" }}>
      <LoginForm />
    </main>
  );
}
