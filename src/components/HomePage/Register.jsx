import React, { useEffect, useState } from "react";

function Register({ setShowLogin, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorRegister(false);
    }, 2000);
  }, [errorRegister]);

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      setUser(data.data.accessToken);
    } catch (error) {
      setErrorRegister(true);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-3/4 md:w-2/4 h-[320px] items-center justify-center shadow-xl border rounded-xl">
      <h1 className="font-bold text-center text-xl mt-10">Register</h1>
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
      {errorRegister && (
        <p className="text-red-400 text-center mt-4 font-bold">
          error Register
        </p>
      )}

      <button
        onClick={() => handleRegister()}
        className="h-14 w-28 bg-green-400 mt-8 font-semibold flex items-center justify-center rounded-xl border shadow-md"
      >
        <p>Register</p>
      </button>
      <h2
        onClick={() => setShowLogin(true)}
        className="text-green-400 cursor-default mt-2 font-semibold"
      >
        Login?
      </h2>
    </div>
  );
}

export default Register;
