import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import UrlHandler from "@/components/HomePage/UrlHandler";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Login from "@/components/HomePage/Login";
import Register from "@/components/HomePage/Register";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useLayoutEffect(() => {
    if (Cookies.get("auth"))
      setUser(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2tub3dsZWRnZWQiOnRydWUsImluc2VydGVkSWQiOiI2NDRhZGFmZTNmYmI5YzliZGE1ZTVjYjkiLCJpYXQiOjE2ODI2MjczMjZ9.Q9yw-267R-f43EM-RhZr2xse41tYx-p3RcJxWohRVEw"
      );
  }, [user]);

  return (
    <Layout>
      <main className="flex flex-col w-full items-center">
        <h1 className="font-bold text-4xl mb-32">Short URL</h1>
        {!user && (
          <>
            {showLogin ? (
              <Login setShowLogin={setShowLogin} setUser={setUser} />
            ) : (
              <Register setShowLogin={setShowLogin} setUser={setUser} />
            )}
          </>
        )}
        {user && <UrlHandler />}
      </main>
    </Layout>
  );
}
