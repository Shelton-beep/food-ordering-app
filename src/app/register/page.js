"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CheckCircle from "../../components/icons/CheckCircle";
import XCircle from "../../components/icons/XCircle";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(true);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
      setShowForm(false);
    } else {
      setError(true);
      setShowForm(false);
    }
    setCreatingUser(false);
  }

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary mb-4 text-4xl">Register</h1>

        {userCreated && (
          <div className="my-4 p-8 text-center text-2xl font-semibold text-gray-500 border max-w-xs mx-auto border-primary rounded-md outline-double">
            Account Successfully Created
            <br /> Now you can{" "}
            <Link className="underline hover:text-primary" href={"/login"}>
              Login &raquo;
            </Link>
            <div className="text-green-800 mt-3 w-20 h-20 mx-auto">
              <CheckCircle />
            </div>
          </div>
        )}

        {error && (
          <div className="my-16 p-8 text-2xl text-center border max-w-xs mx-auto font-semibold text-gray-500 border-primary rounded-md outline">
            An Error has occurred <br />
            Please try again Later!!!
            <div className="text-red-700 w-20 h-20 mx-auto">
              <XCircle />
            </div>
          </div>
        )}

        {showForm && (
          <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              disabled={creatingUser}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              disabled={creatingUser}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button type="submit" disabled={creatingUser}>
              Register
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
              Already have an Account?{" "}
              <Link className="underline" href={"/login"}>
                Login here &raquo;.
              </Link>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default RegisterPage;
