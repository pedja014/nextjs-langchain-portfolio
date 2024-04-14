import me from "@/assets/story-5.png"; // Path to your image
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about John Doe and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Predrag, a frontend developer based in Belgrade. I
          embarked on my programming journey during my time at the Faculty of
          Organizational Sciences, where I delved into the world of backend
          technologies like Java and C#. However, my passion for visual and
          practical design led me to focus on frontend technologies such as{" "}
          <strong>JavaScript</strong>, <strong>HTML</strong>, and{" "}
          <strong>CSS</strong>.
        </p>
        <p>
          One of the most rewarding projects I&apos;ve worked on involved developing
          a React and React Native solution to address parking issues in
          Switzerland. Users can confirm usage of private parking spaces for
          their guests and report unauthorized parking.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I specialize in <strong>React</strong> for frontend development and
          have experience with state management using <strong>Redux</strong>.
          Testing is an integral part of my workflow, utilizing libraries like{" "}
          <strong>Jest</strong> and <strong>Cypress</strong> for component and
          end-to-end testing.
        </p>
        <p>
          My toolkit also includes <strong>Next.js</strong> for server-side
          rendering and <strong>tailwindcss</strong> for responsive and
          efficient styling.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Project Contributions</H2>
        <p>
          In one of my projects, I encountered a challenge with clunky
          performance when loading large datasets. Through meticulous
          investigation, I discovered that the implementation of tooltips was
          incorrect, leading to performance degradation. By reworking the
          tooltip implementation, I successfully improved the user experience
          and performance.
        </p>
        <p>
          Another notable project was developing an IoT software solution for
          smart cars. While I can&apos;t disclose specifics due to NDA, I was
          involved in collecting and analyzing vehicle sensor data to develop a
          comprehensive dashboard.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Outside of coding, I find balance in various hobbies. I&apos;m an outdoor
          enthusiast, enjoying nature hikes and frisbee throwing. Socializing
          and engaging in Dungeons & Dragons sessions with friends keeps my
          creativity alive.
        </p>
        <p>
          I&apos;m also fascinated by 3D printing for its ability to create both
          artistic and practical designs. When it comes to entertainment, I
          enjoy action, comedy, and fantasy movies, with favorites including
          The Boondock Saints and The Lord of the Rings trilogy.
        </p>
        <Image
          src={me}
          alt="John Doe in a natural setting"
          className="rounded-md"
        />
      </section>
    </section>
  );
}
