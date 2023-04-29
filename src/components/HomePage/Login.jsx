import React, { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorRegister(false);
    }, 2000);
  }, [errorRegister]);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      console.log(data.data);
    } catch (error) {
      setErrorRegister(true);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-3/4 md:w-2/4 h-[200px] shadow-xl border rounded-xl">
      <h1 className="font-bold text-center text-xl mt-10">Login</h1>
      <div className="flex flex-col mt-4 w-full items-center justify-center">
        <input
          className="w-3/4 h-[40px] border-2 border-green-400 rounded-l-xl pl-4 text-lg"
          onChange={(text) => setEmail(text.target.value)}
        />
        <input
          type="password"
          className="w-3/4 h-[40px]  border-2 mt-4 border-green-400 rounded-l-xl pl-4 text-lg"
          onChange={(text) => setPassword(text.target.value)}
        />
      </div>
      {errorLogin && (
        <p className="text-red-400 text-center mt-4 font-bold">
          error Login
        </p>
      )}

      <button
        onClick={() => handleLogin()}
        className="h-14 w-28 bg-green-400 flex items-center justify-center rounded-xl border shadow-md"
      >
        <p>Login</p>
      </button>
    </div>
  );
}

export default Login;
