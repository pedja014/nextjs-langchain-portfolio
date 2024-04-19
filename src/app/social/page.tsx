import { H1 } from "@/components/ui/H1";
import { Codepen, Github, Instagram, Linkedin } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "./ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Socials",
  description: "Connect with me on various platforms.",
};

export default function Page() {
  return (
    <>
      <section className="space-y-6">
        <H1>Socials</H1>
      </section>
      <ContactForm />
      <section className="flex flex-wrap justify-center gap-4">
        <Link
          id="socials"
          target="_blank"
          href="https://github.com/pedja014"
          className="group relative flex h-auto w-[150px] cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent p-1 text-xl font-normal text-ring transition-all duration-100"
        >
          <span className="absolute left-0 h-full w-5 border-y border-l border-red-500 transition-all duration-500 group-hover:w-full"></span>
          <div className="flex w-full items-center justify-evenly">
            <p className="translate-x-0 transition-all  duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0">
              GitHub
            </p>
            <Github className="translate-x-0 object-cover transition-all duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0" />
          </div>
          <span className="absolute  translate-x-full opacity-0  transition-all duration-200  group-hover:translate-x-0 group-hover:opacity-100">
            Visit
          </span>
          <span className="absolute right-0 h-full w-5 border-y  border-r border-red-500  transition-all duration-500 group-hover:w-full"></span>
        </Link>
        <Link
          id="socials"
          target="_blank"
          href="https://www.linkedin.com/in/predrag-milićević-b65361b4"
          className="group relative flex h-auto w-[150px] cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent p-1 text-xl font-normal text-ring transition-all duration-100"
        >
          <span className="absolute left-0 h-full w-5 border-y border-l border-red-500 transition-all duration-500 group-hover:w-full"></span>
          <div className="flex w-full items-center justify-evenly">
            <p className="translate-x-0 transition-all duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0">
              LinkedIn
            </p>
            <Linkedin className="translate-x-0 object-cover transition-all duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0" />
          </div>
          <span className="absolute translate-x-full opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
            Visit
          </span>
          <span className="absolute right-0 h-full w-5 border-y border-r border-red-500 transition-all duration-500 group-hover:w-full"></span>
        </Link>
        <Link
          id="socials"
          target="_blank"
          href="https://codepen.io/Predrag-Milievi"
          className="group relative flex h-auto w-[150px] cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent p-1 text-xl font-normal text-ring transition-all duration-100"
        >
          <span className="absolute left-0 h-full w-5 border-y border-l border-red-500 transition-all duration-500 group-hover:w-full"></span>
          <div className="flex w-full items-center justify-evenly">
            <p className="translate-x-0 transition-all  duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0">
              Codepen
            </p>
            <Codepen
              className="translate-x-0 object-cover transition-all duration-200 group-hover:translate-x-[-100%]
         group-hover:opacity-0"
            />
          </div>
          <span className="absolute  translate-x-full opacity-0  transition-all duration-200  group-hover:translate-x-0 group-hover:opacity-100">
            Visit
          </span>
          <span className="absolute right-0 h-full w-5 border-y  border-r border-red-500  transition-all duration-500 group-hover:w-full"></span>
        </Link>
        <Link
          id="socials"
          target="_blank"
          href="https://www.instagram.com/pedja014/"
          className="group relative flex h-auto w-[150px] cursor-pointer items-center justify-center overflow-hidden border-0 bg-transparent p-1 text-xl font-normal text-ring transition-all duration-100"
        >
          <span className="absolute left-0 h-full w-5 border-y border-l border-red-500 transition-all duration-500 group-hover:w-full"></span>
          <div className="flex w-full items-center justify-evenly">
            <p className="translate-x-0 transition-all  duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0">
              Instagram
            </p>
            <Instagram className="translate-x-0 object-cover transition-all duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0" />
          </div>
          <span className="absolute  translate-x-full opacity-0  transition-all duration-200  group-hover:translate-x-0 group-hover:opacity-100">
            Visit
          </span>
          <span className="absolute right-0 h-full w-5 border-y  border-r border-red-500  transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </section>
    </>
  );
}
