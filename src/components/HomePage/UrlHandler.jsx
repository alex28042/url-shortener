import Link from "next/link";
import React, { useEffect, useState } from "react";

function UrlHandler(url) {
  const [urlInput, setUrlInput] = useState("");
  const [urlShortened, setUrlShortened] = useState(null);
  const [errorHandleUrl, setErrorHandleUrl] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorHandleUrl(false);
    }, 2000);
  }, [errorHandleUrl]);

  const handleUrl = async (url) => {

    try {
      console.log(url);
      const response = await fetch("http://localhost:3000/api/v1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });


      const data = await response.json();

      console.log(data);

      setUrlShortened(data.data.urlShorted);
    } catch (error) {
      setErrorHandleUrl(true);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-3/4 md:w-2/4 h-[200px] shadow-xl border rounded-xl">
      <h1 className="font-bold text-center text-xl">
        Paste the URL to be shortened
      </h1>
      <div className="flex flex-row mt-4 w-full items-center justify-center">
        <input
          className="w-3/4 h-[40px] border-2 border-green-400 rounded-l-xl pl-4 text-lg"
          onChange={(text) => setUrlInput(text.target.value)}
        />
        <button
          className="h-[40px] w-[80px] items-center justify-center rounded-r-xl bg-lime-500"
          onClick={() => handleUrl(urlInput)}
        >
          <p className="text-center font-bold">Short</p>
        </button>
      </div>
      {errorHandleUrl && (
        <p className="text-red-400 text-center mt-4 font-bold">
          error getting the shortened url
        </p>
      )}
      {urlShortened !== null && (
        <Link href={`/${urlShortened}`} className="text-green-400">
          {"localhost:3000/" + urlShortened}
        </Link>
      )}
    </div>
  );
}

export default UrlHandler;
