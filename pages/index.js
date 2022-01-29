import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  
  const animateToView = () => {
    document
      .getElementById("twitter-log-in")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const styles = {
    fullScreenSection:
      "w-screen h-screen flex flex-col items-center justify-center",
    button: "bg-black text-white p-4 rounded",
  };

  return (
    <div className="flex flex-col">
      <div className={`${styles.fullScreenSection} gap-10`}>
        <Image src="/logo.png" alt="" height="200" width="200" />
        <h1 className="text-3xl">
          Plan, Schedule and Post your tweets directly from Notion
        </h1>
        <div
          className={`${styles.button} cursor-pointer`}
          onClick={() => animateToView()}
        >
          Get Started
        </div>
      </div>
      <div id="twitter-log-in" className={`${styles.fullScreenSection}`}>
        {!session && (
          <>
            <a
              className={`${styles.button} cursor-pointer`}
              href="/api/auth/get-link"
            >
              Log in with Twitter
            </a>
          </>
        )}
        {session && (
          <>
            Hello {session.user.name}
            <button className={`${styles.button} cursor-pointer`}>
              Click to Proceed
            </button>
            or
            <button
              className={`${styles.button} cursor-pointer`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
