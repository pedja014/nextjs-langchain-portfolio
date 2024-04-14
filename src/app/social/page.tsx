import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "Connect with John Doe on various platforms.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>Connect with Me</H2>
        <p>
          Stay updated with my latest projects, tutorials, and thoughts on
          various platforms:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://github.com/your-github"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/your-codepen"
              className="text-primary hover:underline"
            >
              CodePen
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Contact Information</H2>
        <p>
          Feel free to reach out to me via email or phone:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="mailto:youremail@example.com"
              className="text-primary hover:underline"
            >
              youremail@example.com
            </a>
          </li>
          <li>
            <a
              href="tel:+1234567890"
              className="text-primary hover:underline"
            >
              +1 (234) 567-890
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Other Links</H2>
        <p>
          Explore more of my work and content:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.yourwebsite.com"
              className="text-primary hover:underline"
            >
              Your Website
            </a>
          </li>
          <li>
            <a
              href="https://blog.yourwebsite.com"
              className="text-primary hover:underline"
            >
              Blog
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
    </section>
  );
}
