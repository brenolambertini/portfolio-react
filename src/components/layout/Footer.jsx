function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center mt-12 mb-2 p-2 text-base">
      <p>
        Designed and developed by{" "}
        <span className="font-semibold">Breno Lambertini</span> &copy; {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
