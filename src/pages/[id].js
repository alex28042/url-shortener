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

    const fetchUrl = async () => {
       try {
      const response = await fetch(`http://localhost:3000/api/v1/${id}`)

      const resJson = response.json()

      router.push("")
    } catch (error) {
      console.log(error);
    }
    }
   

  }, []);

  return <Layout></Layout>;
}

export default UrlGetter;
