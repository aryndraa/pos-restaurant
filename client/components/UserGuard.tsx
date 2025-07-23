"use client";

import { useUser } from "@/lib/stores/User";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const allowRoutes = ["/register"];

export default function UserGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUser((state) => state.user);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Tunggu sampai Zustand hydrate dari localStorage
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    if (!user && !allowRoutes.includes(pathname)) {
      router.push("/register");
    }
  }, [hydrated, pathname, user, router]);

  // Jangan render anak-anak sebelum Zustand terhydrate
  if (!hydrated) return null;

  return <>{children}</>;
}
