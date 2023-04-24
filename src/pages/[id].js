import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function UrlGetter() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id.length !== 5) {
      router.push("/");
      return;
    }
  }, []);

  return <Layout></Layout>;
}

export default UrlGetter;
