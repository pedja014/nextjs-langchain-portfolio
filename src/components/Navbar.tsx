import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AIChatButton from "./AIChatButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-ring text-white shadow-xl">
      <div className="gap mx-auto flex max-w-3xl flex-wrap justify-between px-3 py-4">
        <nav className="space-x-4 font-medium">
          <Link href="/">
            <span className="text-white relative cursor-pointer transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-300 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="relative cursor-pointer text-white transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-300 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
              About me
            </span>
          </Link>
          <Link href="/social">
            <span className="relative cursor-pointer text-white transition-all ease-in-out before:absolute before:bottom-0 before:left-[50%] before:h-[1px] before:w-0 before:origin-center before:bg-white before:transition-[width] before:duration-300 before:ease-in-out after:absolute after:bottom-0 after:right-[50%] after:h-[1px] after:w-0 after:origin-center after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:before:w-[50%] hover:after:w-[50%]">
              Socials
            </span>
          </Link>
        </nav>
        <div className="flex items-center gap-4 text-foreground">
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
