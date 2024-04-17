import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import meetings from "../../assets/meetings.png";
import messenger from "../../assets/messenger.png";
import photobooth from "../../assets/photobooth.png";
import codepen from "../../assets/Codepen.png";

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
          Hello! I&apos;m Predrag, a frontend developer passionate about
          crafting optimized and practical solutions. My journey began at the
          Faculty of Organizational Sciences in Belgrade in 2009, where I delved
          into the world of programming, initially focusing on backend
          technologies like Java and C#. Over time, my artistic inclination drew
          me towards frontend development, leading to a deep dive into
          JavaScript, HTML, and CSS and applying all the popular frameworks and
          libraries on top of them to produce visual and practical solutions.
        </p>
        <p>
          One of the most rewarding projects I&apos;ve worked on involved
          developing a React and React Native solution to address parking issues
          in Switzerland. Users can confirm usage of private parking spaces for
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
          rendering, <strong>tailwindcss</strong>, <strong>bootstrap</strong>{" "}
          and <strong>S(CSS)</strong> for responsive and efficient styling.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Coding Practices</H2>
        <p>
          My approach to writing clean, maintainable code involves continuous
          learning and refinement. Through thorough code organization,
          meaningful variable naming, componentization, and ensuring type
          safety, I strive to create code that is not just functional, but also
          easy to understand and maintain.
        </p>
        <p>
          I am well-versed in frontend testing frameworks, utilizing Jest and
          react-testing-library for comprehensive component testing.
          Additionally, Cypress has been a go-to choice for end-to-end testing,
          ensuring a high-quality codebase with adequate test coverage.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Motivations for Frontend Development</H2>
        <p>
          My journey into frontend development was fueled by a desire to combine
          my artistic flair with technical skills. The dynamic nature of
          JavaScript, along with the myriad of frontend frameworks, offered an
          exciting path to create innovative and visually appealing solutions.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Staying Updated with Frontend Trends</H2>
        <p>
          To stay abreast of the latest frontend trends and best practices, I
          actively engage with the developer community through social media,
          YouTube, and other platforms. Learning from others, engaging in
          discussions, and attending webinars are integral parts of my growth as
          a frontend developer.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Collaborating on Frontend Projects</H2>
        <p>
          Working in agile environments has honed my ability to collaborate
          closely with designers, backend developers, and other team members.
          Collaboration and transparency are key tenets, ensuring a smooth flow
          of information and delivering solutions that meet everyone&apos;s
          requirements.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Projects and code examples</H2>
        <ProjectCards />
      </section>

    </section>
  );
}

function ProjectCards() {
  return (
    <div className="grid grid-cols-1 place-items-center items-center justify-center gap-7 pt-5 md:grid-cols-2">
      <a
        title="https://messenger-4-us.vercel.app"
        key="NextJS Whatsapp Clone"
        rel={"norefferer"}
        href="https://messenger-4-us.vercel.app"
        target="_blank"
        className="group relative isolate flex h-full w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40"
      >
        <Image
          width={500}
          height={500}
          src={messenger}
          alt="Messenger-4-Us"
          className="absolute inset-0 h-full w-full overflow-hidden object-cover duration-300 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <H2 className="z-10 mt-3 text-center text-white">
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            &lt;{" "}
          </span>
          Whatsapp clone
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            /&gt;
          </span>
        </H2>
        <div className="z-10 gap-y-1 overflow-hidden text-center text-sm leading-6 text-gray-300">
          NextJs, Stream, Clerk Auth, Web Push Notifications, Tailwind CSS,
          TypeScript
        </div>
      </a>
      <a
        title="https://meetings-4-us.vercel.app"
        key="NextJS Zoom Clone"
        rel={"norefferer"}
        href="https://meetings-4-us.vercel.app"
        target="_blank"
        className="group relative isolate flex  h-full w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40"
      >
        <Image
          width={500}
          height={500}
          src={meetings}
          alt="NextJS Zoom Clone"
          className="absolute inset-0 h-full w-full overflow-hidden object-cover duration-300 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <H2 className="z-10 mt-3 text-center text-white">
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            &lt;{" "}
          </span>
          Zoom clone app
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            /&gt;
          </span>
        </H2>
        <div className="z-10 gap-y-1 overflow-hidden text-center text-sm leading-6 text-gray-300">
          Next.js, Stream Video SDK, React, TypeScript, Tailwind CSS
        </div>
      </a>
      <a
        title="https://bigfootpb.com/"
        key="Bigfoot"
        rel={"norefferer"}
        href="https://bigfootpb.com/"
        target="_blank"
        className="group relative isolate flex  h-full w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40"
      >
        <Image
          width={500}
          height={500}
          src={photobooth}
          alt="Bigfoot PhotoBooth"
          className="absolute inset-0 h-full w-full overflow-hidden object-cover duration-300 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <H2 className="z-10 mt-3 text-center text-white">
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            &lt;{" "}
          </span>
          Bigfoot PhotoBooths
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            /&gt;
          </span>
        </H2>
        <div className="z-10 gap-y-1 overflow-hidden text-center text-sm leading-6 text-gray-300">
          Wordpress photobooths service website (JS, jQuery, SCSS)
        </div>
      </a>
      <a
        title="https://codepen.io/Predrag-Milievi"
        key="Codepen"
        rel={"norefferer"}
        href="https://codepen.io/Predrag-Milievi"
        target="_blank"
        className="group relative isolate z-0 flex h-full w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40"
      >
        <Image
          width={500}
          height={500}
          src={codepen}
          alt="Codepen examples"
          className="absolute inset-0 h-full w-full overflow-hidden object-cover duration-300 group-hover:scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <H2 className="z-0 mt-3 text-center text-white">
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            &lt;{" "}
          </span>
          Codepen examples
          <span className="text-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            /&gt;
          </span>
        </H2>
        <div className="z-0 gap-y-1 overflow-hidden text-center text-sm leading-6 text-gray-300">
          Pens related to freeCodeCamp certification projects
        </div>
      </a>
    </div>
  );
}
