import Layout from "@/components/Layout/Layout";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function UrlGetter() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null)

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
              `Bearer ${user}`,
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

  return <AuthContext setUser={setUser}></AuthContext>;
}

export default UrlGetter;
