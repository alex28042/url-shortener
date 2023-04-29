import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function index() {
  const [urldata, setUrldata] = useState(["gggg", "fafasd"]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/urls/all", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2tub3dsZWRnZWQiOnRydWUsImluc2VydGVkSWQiOiI2NDRhZGFmZTNmYmI5YzliZGE1ZTVjYjkiLCJpYXQiOjE2ODI2MjczMjZ9.Q9yw-267R-f43EM-RhZr2xse41tYx-p3RcJxWohRVEw",
          },
        });

        const responseJson = await response.json();

        const toArrayUrls = Object.values(responseJson.data);

        setUrldata(toArrayUrls);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <Layout>
      <h1>Your urls:</h1>
      {urldata?.map((url) => (
        <Link href={`/${url.urlShortened}`} key={url._id}>
          {"localhost:3001/" + url.urlShortened}
        </Link>
      ))}
    </Layout>
  );
}

export default index;
