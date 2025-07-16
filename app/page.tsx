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
    </div>
  );
}
