import { Link } from "react-router-dom";

import usePageMeta from "../../hooks/usePageMeta";

function NotFound() {
  usePageMeta({
    title: "Page not found | Breno Lambertini",
    description: "This page does not exist.",
    path: "/404",
    noIndex: true,
  });

  return (
    <section className="flex flex-col items-center w-screen gap-6 mt-8">
      <h2 className="font-bold text-6xl text-yellow">404</h2>

      <p className="text-2xl text-center">
        This page does not exist, but the others do.
      </p>

      <Link
        to="/"
        className="bg-blue border rounded p-2 font-bold transition duration-150 ease-in-out hover:scale-110"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
