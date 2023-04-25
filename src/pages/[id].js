import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function UrlGetter() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {

    if (!id) return;

    if (id?.length !== 5) {
      router.push("/");
      return;
    }


    const fetchUrl = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/${id}`);
        
        const resJson = await response.json();

        router.replace(resJson.data.url);
      } catch (error) {
        router.push("/");
        console.log(error);
      }
    };

    fetchUrl();
  }, [id]);

  return <div></div>;
}

export default UrlGetter;
