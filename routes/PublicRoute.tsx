"use client";

import { UserContext } from "@/contexts/UserProvider";
import { useRouter } from "next/navigation";
import { ReactElement, useContext, useEffect } from "react";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (user.token) {
      router.push("/dashboard");
    }
  }, [router, user.token]);

  if (!user.token) {
    return <div>{children}</div>;
  } else {
    return <div></div>;
  }
};

export default PublicRoute;
