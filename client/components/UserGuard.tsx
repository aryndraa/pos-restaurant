"use client";

import { useUser } from "@/lib/stores/User";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const allowRoutes = ["/register"];

export default function UserGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUser((state) => state.user);

  useEffect(() => {
    if (!user && !allowRoutes.includes(pathname)) {
      router.push("/register");
    }
  });
  return <>{children}</>;
}
