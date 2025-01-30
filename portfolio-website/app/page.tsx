import Image from "next/image";
import Link from "next/link";
import TypingEffect from "@/app/ui/hero/title_typing";
import '@/app/ui/global.css';

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className="text-white text-for text-center font-[family-name:var(--font-roboto-mono)]">
          <span className="text-tiel text-xs">Hi there! My name is</span>
          <div className="pb-2 text-6xl font-[family-name:var(--font-roboto-sans)]">
            Alvin Adjei
          </div>
          <div>
            <TypingEffect />
          </div>
        <div className="flex justify-center pt-10 items-center gap-4">
          <Link
            className="rounded-3xl hover:rounded-xl border border-solid border-white/[.145] hover:border-tiel transition-all duration-300 ease-linear flex items-center justify-center text-sm sm:text-base hover:text-tiel h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
            target=""
            rel="noopener noreferrer"
          >
            Let me show you around!
          </Link>
        </div>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </Link> */}
      {/* </footer> */}
    </div>
  );
}
