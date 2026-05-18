import { BsPinAngleFill } from "react-icons/bs";

import styles from "./css/About.module.css";

import unifesp_logo from "../../img/unifesp_logo.png";

function About() {
  return (
    <section className="flex flex-col items-center w-screen">
      <div className="flex flex-col mb-16">
        <h2 className="mb-8 text-4xl text-center text-yellow">1. UNIVERSITY</h2>

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
              <li>- Bachelor of Science and Technology</li>
              <li>- Emphasis in Computer Science</li>
              <li>- Scientific Initiation Scholarship at USP</li>
              <li>- Over 4 years of proven experience</li>
              <li>- Postgraduate Certificate in Software Engineering</li>
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

      <div className="flex flex-col">
        <h2 className="mb-4 text-4xl text-center text-yellow">2. MY SKILLS</h2>

        <div className="flex flex-col ml-2 gap-12">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">Front-end:</h3>

            <div className="flex flex-wrap">
              <img
                className={styles.skill_icon}
                alt="html5"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="css3"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="typescript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="angular"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="vuejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="vuetify"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="bootstrap"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
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
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="mysql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="mongodb"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="java"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="nodejs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="expressjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="adonisjs"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="c-lang"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              />
              <img
                className={styles.skill_icon}
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
                alt="vscode"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="aws"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="docker"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="jest"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              />
              <img
                className={styles.skill_icon}
                alt="npm"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="yarn"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="selenium"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
              />
              <img
                className={styles.skill_icon}
                alt="pandas"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
                alt="numpy"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
              />
              <img
                className={styles.skill_icon}
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
