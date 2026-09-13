import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";

import usePageMeta from "../../hooks/usePageMeta";

import styles from "./css/Home.module.css";

import my_photo from "../../img/my-photo.png";

function Home() {
  usePageMeta({
    title: "Breno Lambertini | Full Stack Software Engineer",
    description:
      "Breno Lambertini is a Full Stack Software Engineer with 5 years of experience building web applications and enterprise systems with Vue.js, TypeScript, Node.js, Python and AWS.",
    path: "/",
  });

  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-wrap justify-center gap-12 mb-16">
          <img className="max-h-72 rounded-full" src={my_photo} alt="Breno Lambertini" />

        <div className="flex flex-col gap-4 justify-center">
          <p className="text-4xl">Hi!</p>
          <p className="text-4xl">I'm Breno Lambertini</p>
          <h2 className="font-bold text-5xl text-yellow mt-4">
            Full Stack Software Engineer
          </h2>
          <p className="max-w-xl text-lg">
            5 years building web applications and enterprise systems, with a
            focus on Vue.js and TypeScript on the front-end and Node.js, Python
            and AWS on the back-end.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
        <h2 className="flex items-center text-3xl">CONTACT ME:</h2>

        <ul className="flex flex-wrap gap-12 mt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/brenolambertini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={60} className={styles.contact_icon} />
            </a>
          </li>
          <li>
            <a href="mailto:brenobl2000@gmail.com" aria-label="Email">
              <SiGmail size={60} className={styles.contact_icon} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/brenolambertini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub size={60} className={styles.contact_icon} />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-x-24 gap-y-12 mt-16 mb-4">
        <a
          href="https://drive.google.com/uc?export=download&id=16bGppDEoDWGksgqis02oQPBWlCOVgwxo"
          className={styles.cv_btn}
        >
          Download CV (English)
        </a>

        <a
          href="https://drive.google.com/uc?export=download&id=1b0Z3-WrHmWUj1Pw9K3TVZFTfePG8TUp0"
          className={styles.cv_btn}
        >
          Baixar Currículo (Português)
        </a>
      </div>
    </section>
  );
}

export default Home;
