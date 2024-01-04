"use client";

import { signIn } from "next-auth/react";

const Login = async () => {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      <h1>This is login page</h1>
        <div>
          <button
            onClick={handleLogin}
            className="bg-[#18D860] text-with p-5 rounded-full"
          >Login with </button>
        </div>
    </div>
  )
}

export default Login;
