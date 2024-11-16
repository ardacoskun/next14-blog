import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="font-mono">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
