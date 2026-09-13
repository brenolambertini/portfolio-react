import usePageMeta from "../../hooks/usePageMeta";

import styles from "./css/Projects.module.css";

import portfolio from "../../img/portfolio.png";
import culturaeduca from "../../img/culturaeduca.png";
import angular_project from "../../img/angular-project.jpg";
import react_project from "../../img/react-project.png";
import robot_of_love from "../../img/robot-of-love.png";

function Projects() {
  usePageMeta({
    title: "Projects by Breno Lambertini | Software Engineering Portfolio",
    description:
      "Professional and personal projects by Breno Lambertini, from a nationwide real estate registry platform to open-source geolocation and search systems.",
    path: "/projects",
  });

  return (
    <section className="flex flex-col items-center w-screen gap-16">
      <h2 className="text-4xl text-center text-yellow">
        1. PROFESSIONAL PROJECTS
      </h2>

      <div className={styles.main_div}>
        <div className={styles.left_block}>
          <h3 className={styles.title}>SREI</h3>
          <p className={styles.company}>ONR</p>
          <p className={styles.period}>2025 - Present</p>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;A nationwide platform for the digital transformation of real
            estate registries in Brazil. I have worked on its front-end since
            the project's inception, built on a micro-frontend architecture
            (Qiankun) with Vue 3, TypeScript, Pinia and Tailwind CSS. My main
            contributions are MVP features and module refactors with over 90%
            unit test coverage, a proof of concept for a JSON Schema-driven
            dynamic form system, and work on the shared design system and on
            navigation across micro-frontends.{" "}
            <a
              className="underline"
              href="https://www.onr.org.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="vuejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="vitest"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-original.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_block}>
          <h3 className={styles.title}>PortData</h3>
          <p className={styles.company}>PortLouis</p>
          <p className={styles.period}>2023 - 2025</p>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;A platform for the real estate and legal sectors. I developed
            new modules from scratch, with a Vue.js front-end and REST APIs in
            Node.js (Express) and SQL, and led the migration of a large monolith
            from Vue 2 to Vue 3, including Vuetify and a move to Vite. I also
            built RPA and web scraping solutions to collect official
            certificates and court records, integrated LLMs (OpenAI API) and OCR
            (Python, Tesseract) to extract and structure data from documents,
            and built serverless microservices on AWS (Lambda, S3, SQS) with
            queues, cron jobs and automated emails.
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="vuejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="nodejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="aws"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img
            className={styles.img}
            loading="lazy"
            alt="CulturaEduca"
            src={culturaeduca}
          />

          <h3 className={styles.title}>Cultura Educa</h3>
          <p className={styles.company}>USP / InterSCity</p>
          <p className={styles.period}>2021 - 2022</p>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;A fully open-source platform maintained by InterSCity (USP)
            that focuses on geolocation and information sharing in the context
            of culture and education in cities. I built a full stack text search
            system across more than 20 databases holding tens of thousands of
            records, and improved its performance and scalability with
            pagination, triggers and materialized views. I also built and
            refactored the geolocation features, which rely on OpenStreetMap,
            the OpenLayers library, and the Correios and Nominatim APIs.{" "}
            <a
              className="underline"
              href="https://culturaeduca.cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the platform!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-4xl text-center text-yellow">
        2. PERSONAL PROJECTS
      </h2>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img
            className={styles.img}
            loading="lazy"
            alt="Portfolio"
            src={portfolio}
          />

          <h3 className={styles.title}>My Portfolio</h3>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;This portfolio was designed and developed from scratch with
            React and the Vite build tool. For styling, the choice was Tailwind
            CSS.{" "}
            <a
              className="underline"
              href="https://github.com/brenolambertini/portfolio-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img
            className={styles.img}
            loading="lazy"
            alt="Angular Project"
            src={angular_project}
          />

          <h3 className={styles.title}>Angular Project</h3>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;A full stack project built with Angular: a website similar to
            Instagram where users can share moments, each one with a name, a
            description and an image. Moments are stored in a relational
            database (SQLite) through a RESTful API built with AdonisJS (
            <a
              className="underline"
              href="https://github.com/brenolambertini/api-rest-adonisjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              view the API repository!
            </a>
            ). Users can also edit or delete each moment, and comment on the
            moments listed on the home page, with the user name and the comment
            itself stored in the database as well.{" "}
            <a
              className="underline"
              href="https://github.com/brenolambertini/curso-angular-projeto"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="angular"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="adonisjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="sqlite"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img
            className={styles.img}
            loading="lazy"
            alt="React Project"
            src={react_project}
          />

          <h3 className={styles.title}>React Project</h3>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;A full stack project built with React whose goal is to manage
            projects in general, with fields such as name, budget and category.
            Projects are stored through JSON Server, which simulates a REST API.
            Each project can also be edited to add services with a
            pre-established cost, which automatically updates the total amount
            spent from the project budget.{" "}
            <a
              className="underline"
              href="https://github.com/brenolambertini/curso-react-projeto"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="nodejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_div}>
        <div className={styles.left_div}>
          <img
            className={styles.img}
            loading="lazy"
            alt="Robot of Love"
            src={robot_of_love}
          />

          <h3 className={styles.title}>Robot of Love</h3>
        </div>

        <div className={styles.right_div}>
          <p className={styles.text}>
            &emsp;An Instagram automation built with Python and Selenium that
            likes every post and follows every post owner from a specific URL,
            which can be either a tag or a person. The user can choose whether
            to only like, only follow, or both.{" "}
            <a
              className="underline"
              href="https://github.com/brenolambertini/robot-of-love"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub!
            </a>
          </p>

          <div className={styles.tech_div}>
            <p className={styles.tech_text}>Main technologies:</p>
            <div className={styles.skills_div}>
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.skills_icon}
                loading="lazy"
                alt="selenium"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
