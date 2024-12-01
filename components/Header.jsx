import Link from "next/link";
import Navigation from "./navigation/Navigation";
import DarkMode from "./DarkMode";
import useServerDarkMode from "@/hooks/useServerDarkMode";

const Header = () => {
  const theme = useServerDarkMode();

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
      <DarkMode defaultTheme={theme} />
    </header>
  );
};

export default Header;
