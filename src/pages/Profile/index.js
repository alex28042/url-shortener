import Layout from "@/components/Layout/Layout";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function index() {
  const [urldata, setUrldata] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUrls = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/urls/all", {
          headers: {
            Authorization: `Bearer ${user}`,
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
  }, [user]);

  return (
    <AuthContext setUser={setUser}>
      <Layout>
        <h1>Your urls:</h1>
        {urldata?.map((url) => (
          <Link href={`/${url.urlShortened}`} key={url._id}>
            {"localhost:3001/" + url.urlShortened}
          </Link>
        ))}
      </Layout>
    </AuthContext>
  );
}

export default index;
