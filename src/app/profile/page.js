"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const session = useSession();
  const [userName, setUserName] = useState("");
  const { status } = session;

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
      });
      if (response.ok) {
        resolve();
      } else reject();
    });

    toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile Saved!",
      error: "Something went wrong try again",
    });
  }

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set("file", files[0]);
      await fetch("api/upload", {
        method: "POST",
        body: data,
        //headers: { "Content-Type": "multipart/form-data" },
      });
    }
  }

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const userImage = session.data?.user.image;

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary mb-4 text-4xl">Profile</h1>

        <div className="max-w-md mx-auto ">
          <div className="flex gap-2 items-center">
            <div className="p-2 rounded-lg items-center justify-center">
              <div>
                <Image
                  className="rounded-lg mb-1 mx-auto"
                  src={userImage}
                  width={100}
                  height={100}
                  priority
                  alt="avatar"
                />
                <label>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                    Edit
                  </span>
                </label>
              </div>
            </div>
            <form className="grow" onSubmit={handleProfileInfoUpdate}>
              <input
                type="text"
                placeholder="First and Last name"
                value={userName}
                onChange={(ev) => setUserName(ev.target.value)}
              />
              <input type="email" value={session.data?.user.email} disabled />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
