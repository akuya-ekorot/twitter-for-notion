import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <div className={`${styles.button} cursor-pointer`} onClick={() => animateToView() }>
          Get Started
        </div>
      </div>
      <div id="twitter-log-in" className={`${styles.fullScreenSection}`}>
        <Link href="api/auth/twitter">
          <a className={`${styles.button}`}>Log in with Twitter</a>
        </Link>
      </div>
    </div>
  );
}
