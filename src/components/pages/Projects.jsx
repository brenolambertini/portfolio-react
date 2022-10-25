import culturaeduca from "../../img/culturaeduca.png";
import robot_of_love from "../../img/robot-of-love.png";
import portfolio from "../../img/portfolio.png";

function Projects() {
  return (
    <section className="flex flex-col items-center w-screen gap-16">
      <div className="flex flex-col sm:flex-row max-w-4xl p-3 gap-6 bg-blue rounded">
        <div className="flex flex-col justify-center items-center">
          <img className="rounded w-[250px]" alt="Portfolio" src={portfolio} />

          <h2 className="p-1 font-bold text-[30px]">My Portfolio</h2>
        </div>

        <div className="flex flex-col flex-1 justify-between gap-6">
          <p className="text-[22px]">
            This portfolio was developed using React, a Javascript library, in
            addition to the Vite build tool. For styling, the option chosen was
            Tailwind, a CSS framework.
          </p>

          <div className="flex flex-col">
            <p className="font-bold text-[24px] text-right">
              Main technologies:
            </p>
            <div className="flex flex-wrap justify-end">
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="react"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="tailwindcss"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-4xl p-3 gap-6 bg-blue rounded">
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded w-[250px]"
            alt="CulturaEduca"
            src={culturaeduca}
          />

          <h2 className="p-1 font-bold text-[30px]">CulturaEduca</h2>
        </div>

        <div className="flex flex-col flex-1 justify-between gap-6">
          <p className="text-[22px]">
            Software development at CulturaEduca, a platform maintained by
            InterSCity (USP) built especially with Django Framework, which
            focuses mainly on geolocation and information sharing in the context
            of culture and education in cities.{" "}
            <a
              className="underline"
              href="https://culturaeduca.cc/"
              target="_blank"
            >
              Check here!
            </a>
          </p>

          <div className="flex flex-col">
            <p className="font-bold text-[24px] text-right">
              Main technologies:
            </p>
            <div className="flex flex-wrap justify-end">
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="django"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="foundation"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-4xl p-3 gap-6 bg-blue rounded">
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded w-[250px]"
            alt="Robot of Love"
            src={robot_of_love}
          />

          <h2 className="p-1 font-bold text-[30px]">Robot of Love</h2>
        </div>

        <div className="flex flex-col flex-1 justify-between gap-6">
          <p className="text-[22px]">
            Robot of Love is a bot built with Python and Selenium that likes
            every post and follows every post owner of a specific URL, which can
            be either a tag or a person. And user can choose if he want only to
            like, only to follow or both.{" "}
            <a
              className="underline"
              href="https://github.com/br-N/robot-of-love"
              target="_blank"
            >
              Check here!
            </a>
          </p>

          <div className="flex flex-col">
            <p className="font-bold text-[24px] text-right">
              Main technologies:
            </p>
            <div className="flex flex-wrap justify-end">
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
                alt="python"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              />
              <img
                className="p-1 m-1 h-20 bg-salmon rounded transition duration-300 ease-out hover:scale-110"
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
