"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { H1 } from "@/components/ui/H1";
import ProgressBar from "./ProgressBar";

export default function ContactForm() {
  const form = useRef(null);

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const service = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "";
  const template = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "";
  const pubKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "";

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      alert("form error");
      return;
    }

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: pubKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShow(true);
          setError(false);
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          setShow(true);
          setError(true);
          console.log("FAILED...", error.text);
        },
      );
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 4990);
    }
  }, [show]);

  return (
    <section className="body-font relative bg-background text-gray-400">
      <form
        className="container mx-auto px-5 pt-16"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-12 flex w-full flex-col text-center">
          <H1 className="title-font mb-4 text-2xl font-medium text-foreground dark:text-white sm:text-3xl">
            Contact me
          </H1>
          <p className="mx-auto text-base leading-relaxed text-foreground dark:text-white lg:w-2/3">
            Feel free to reach out! Whether you have a question, feedback, or a
            collaboration proposal, I&apos;d love to hear from you.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  required
                  type="text"
                  name="user_name"
                  data-lpignore
                  id="name"
                  className="peer w-full rounded border border-ring bg-opacity-40 px-3 py-1 leading-8 text-foreground  placeholder-transparent outline-none  focus:border-red-500  focus:ring-2 focus:ring-ring"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute -top-6 left-3 bg-transparent text-sm leading-7 text-foreground transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-3 peer-focus:text-sm peer-focus:text-ring"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  required
                  type="email"
                  name="user_email"
                  data-lpignore
                  id="email"
                  className="peer w-full rounded border border-ring bg-opacity-40 px-3 py-1 leading-8 text-foreground placeholder-transparent outline-none  focus:border-red-500  focus:ring-2 focus:ring-ring"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute -top-6 left-3 bg-transparent text-sm leading-7 text-foreground transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-3 peer-focus:text-sm peer-focus:text-ring"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  required
                  data-lpignore
                  id="message"
                  name="message"
                  className="peer h-32 w-full resize-none rounded border border-ring bg-opacity-40 px-3 py-1 leading-6 text-foreground placeholder-transparent outline-none  focus:border-red-500  focus:ring-2 focus:ring-ring"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute -top-6 left-3 bg-transparent text-sm leading-7 text-foreground transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:left-3 peer-focus:text-sm peer-focus:text-ring"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center pb-5 pt-2">
              <button
                data-lpignore
                type="submit"
                value="Send"
                className="mx-auto flex rounded border-0 bg-ring px-8 py-2 text-lg text-white hover:bg-red-600 focus:outline-none"
              >
                Submit
              </button>
              <ProgressBar show={show} error={error} />
            </div>
            <div className="w-full border-t border-gray-800 p-2 pt-5 text-center">
              <a className="text-ring">predragmilicevic014@gmail.com</a>
              <p className="my-5 leading-normal">
                Jurija Gagarina 146 <br />
                11070, Novi Beograd
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
