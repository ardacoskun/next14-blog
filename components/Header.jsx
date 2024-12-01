import Link from "next/link";
import Navigation from "./navigation/Navigation";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <header className="flex justify-between mt-4 md:items-center">
      <div className="flex items-center md:space-x-12">
        <div className="hidden md:block">
          <Link href="/" className="text-xl">
            Blog Project
          </Link>
        </div>
        <Navigation />
      </div>
      <DarkMode />
    </header>
  );
};

export default Header;
