import Layout from "@/components/Layout/Layout";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { cookies, cookies } from "next/headers";
import { useRouter } from "next/router";

function AuthContext({ children }) {
  const cookiesStore = cookies();
  const router = useRouter();
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useLayoutEffect(() => {
    if (!cookiesStore.get("auth")) {
      router.push("/");
      return;
    }

    setisAuthenticated(true);
  }, []);

  return <Layout>{isAuthenticated && <>{children}</>}</Layout>;
}

export default AuthContext;
