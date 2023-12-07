"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password });

    setLoginInProgress(false);
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary mb-4 text-4xl">Login</h1>
        <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            disabled={loginInProgress}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            disabled={loginInProgress}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button type="submit" disabled={loginInProgress}>
            Login
          </button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button className="flex gap-4 justify-center">
            <Image
              src={"/googleImage.png"}
              alt="LogIn with google"
              width={24}
              height={24}
            />
            Login with google
          </button>
          <div className="text-center my-4 text-gray-500 border-t pt-4">
            Dont have an Account?{" "}
            <Link className="underline" href={"/register"}>
              Register here &raquo;
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginPage;
