import React, { useEffect, useState } from "react";

function Login({ setShowLogin, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorLogin(false);
    }, 2000);
  }, [errorLogin]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      setUser(data.data.accessToken)
    } catch (error) {
      setErrorRegister(true);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-3/4 md:w-2/4 h-[320px] shadow-xl items-center justify-center border rounded-xl">
      <h1 className="font-bold text-center text-xl mt-10">Login</h1>
      <div className="flex flex-col mt-4 w-full items-center justify-center">
        <input
          className="w-3/4 h-[40px] border-2 border-green-400 rounded-l-xl pl-4 text-lg"
          onChange={(text) => setEmail(text.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="w-3/4 h-[40px]  border-2 mt-4 border-green-400 rounded-l-xl pl-4 text-lg"
          onChange={(text) => setPassword(text.target.value)}
          placeholder="Password"
        />
      </div>
      {errorLogin && (
        <p className="text-red-400 text-center mt-4 font-bold">error Login</p>
      )}

      <button
        onClick={() => handleLogin()}
        className="h-14 w-28 bg-green-400 flex mt-8 font-semibold items-center justify-center rounded-xl border shadow-md"
      >
        <p>Login</p>
      </button>

      <h2
        onClick={() => setShowLogin(false)}
        className="text-green-400 mt-2 cursor-default font-semibold"
      >
        Register?
      </h2>
    </div>
  );
}

export default Login;
