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

    console.log(JSON.stringify({ url: id }));

    const fetchUrl = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/urls/url/${id}`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2tub3dsZWRnZWQiOnRydWUsImluc2VydGVkSWQiOiI2NDRhZGFmZTNmYmI5YzliZGE1ZTVjYjkiLCJpYXQiOjE2ODI2MjczMjZ9.Q9yw-267R-f43EM-RhZr2xse41tYx-p3RcJxWohRVEw",
          },
        });

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
