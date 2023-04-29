import Layout from "@/components/Layout/Layout";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";

function AuthContext({ children, setUser }) {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  useLayoutEffect(() => {
    /*
    if (!cookiesStore.get("auth")) {
      router.push("/");
      return;
    }

    setUser(cookiesStore.get("auth"));*/

    if (auth) {
      router.push("/");
      return;
    }

    setUser(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2tub3dsZWRnZWQiOnRydWUsImluc2VydGVkSWQiOiI2NDRhZGFmZTNmYmI5YzliZGE1ZTVjYjkiLCJpYXQiOjE2ODI2MjczMjZ9.Q9yw-267R-f43EM-RhZr2xse41tYx-p3RcJxWohRVEw"
    );
  }, []);

  return <>{children}</>;
}

export default AuthContext;
