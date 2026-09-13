import { BsPinAngleFill } from "react-icons/bs";

import usePageMeta from "../../hooks/usePageMeta";

import styles from "./css/About.module.css";

import unifesp_logo from "../../img/unifesp_logo.png";

function About() {
  usePageMeta({
    title: "About Breno Lambertini | Experience, Education and Skills",
    description:
      "The professional experience, education and technical skills of Breno Lambertini, a Full Stack Software Engineer working with Vue.js, TypeScript, Node.js, Python and AWS.",
    path: "/about",
  });

  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-col mb-16">
        <h2 className="mb-8 text-4xl text-center text-yellow">1. EDUCATION</h2>

        <div className="flex flex-wrap gap-44 justify-center">
          <div className="flex flex-col items-center mb-8">
            <img
              className="w-96 rounded"
              alt="Unifesp Logo"
              src={unifesp_logo}
            />

            <h3 className="text-center text-2xl font-semibold text-yellow mt-3 mb-6">
              Federal University of São Paulo
            </h3>

            <ul className="flex flex-col text-lg gap-2">
              <li>- B.Sc. in Science and Technology (2019 - 2022)</li>
              <li>- Computer Science focus</li>
              <li>- Scientific Initiation Scholarship at USP</li>
              <li>- Postgraduate Specialization in Software Engineering (2025)</li>
              <li>- Postgraduate Specialization in Cybersecurity (in progress)</li>
            </ul>
          </div>

          <div className="flex flex-col p-2 gap-4 md:rotate-3 text-black bg-yellow">
            <span className="flex justify-center">
              <BsPinAngleFill size={50} color="#D42500" />
            </span>

            <h4 className="text-bold text-center text-2xl">
              SOME SUBJECTS I TOOK:
            </h4>

            <ul className="text-lg">
              <li>&bull; Data Structures and Algorithms I & II</li>
              <li>&bull; Object-oriented programming</li>
              <li>&bull; Design and Analysis of Algorithms</li>
              <li>&bull; Computer graphics</li>
              <li>&bull; Artificial Intelligence</li>
              <li>&bull; Computational Modeling</li>
              <li>&bull; Calculus I, II, III & IV</li>
              <li>&bull; Physics I, II & III</li>
              <li>&bull; Electric Circuits I & II</li>
              <li>&bull; Microeconomics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-16">
        <h2 className="mb-8 text-4xl text-center text-yellow">2. EXPERIENCE</h2>

        <div className="flex flex-col gap-8 max-w-4xl">
          <div className={styles.exp_card}>
            <div className={styles.exp_header}>
              <h3 className={styles.exp_role}>
                Frontend Software Engineer (Vue.js)
              </h3>
              <span className={styles.exp_period}>Apr 2025 - Present</span>
            </div>

            <p className={styles.exp_company}>ONR &bull; SREI &bull; Remote</p>

            <ul className={styles.exp_list}>
              <li>
                &bull; Worked from the project's inception on the front-end of
                SREI, a nationwide real estate registry platform built on a
                micro-frontend architecture (Qiankun) with Vue 3, TypeScript,
                Pinia and Tailwind CSS.
              </li>
              <li>
                &bull; Delivered MVP features and module refactors with 90%+
                unit test coverage (Vitest).
              </li>
              <li>
                &bull; Built the proof of concept for a JSON Schema-driven
                dynamic form system, now being implemented.
              </li>
              <li>
                &bull; Contributed to the shared design system and to navigation
                across micro-frontends (Vue Router).
              </li>
            </ul>
          </div>

          <div className={styles.exp_card}>
            <div className={styles.exp_header}>
              <h3 className={styles.exp_role}>Full Stack Software Engineer</h3>
              <span className={styles.exp_period}>Mar 2023 - Apr 2025</span>
            </div>

            <p className={styles.exp_company}>
              PortLouis &bull; PortData &bull; Remote
            </p>

            <ul className={styles.exp_list}>
              <li>
                &bull; Developed new modules from scratch, with a Vue.js
                front-end and REST APIs in Node.js (Express) and SQL.
              </li>
              <li>
                &bull; Led the migration of a large monolith from Vue 2 to Vue
                3, including Vuetify and a move to Vite.
              </li>
              <li>
                &bull; Built RPA and web scraping solutions to collect official
                certificates and court records.
              </li>
              <li>
                &bull; Integrated LLMs (OpenAI API) and OCR (Python, Tesseract)
                to extract and structure data from documents.
              </li>
              <li>
                &bull; Built serverless microservices on AWS (Lambda, S3, SQS)
                with queues, cron jobs and automated emails.
              </li>
            </ul>
          </div>

          <div className={styles.exp_card}>
            <div className={styles.exp_header}>
              <h3 className={styles.exp_role}>Research Software Engineer</h3>
              <span className={styles.exp_period}>Mar 2021 - Aug 2022</span>
            </div>

            <p className={styles.exp_company}>
              USP / InterSCity &bull; CulturaEduca &bull; Remote
            </p>

            <ul className={styles.exp_list}>
              <li>
                &bull; Built a full stack text search system across more than 20
                databases with tens of thousands of records.
              </li>
              <li>
                &bull; Improved query performance and scalability with
                pagination, triggers and materialized views.
              </li>
              <li>
                &bull; Built and refactored interactive maps and geolocation
                features using OpenStreetMap, OpenLayers and Nominatim.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="mb-4 text-4xl text-center text-yellow">3. MY SKILLS</h2>

        <div className="flex flex-col ml-2 gap-12">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Front-end:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="vuejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="angular"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="vuetify"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="html5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="css3"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="bootstrap"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Back-end:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="nodejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="expressjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="mysql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="mongodb"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="adonisjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="java"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="c-lang"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="c++"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Tools:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="aws"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="docker"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="github actions"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="vite"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="vitest"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="jest"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="selenium"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="pandas"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="numpy"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="vscode"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="npm"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="yarn"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                loading="lazy"
                alt="opengl"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
