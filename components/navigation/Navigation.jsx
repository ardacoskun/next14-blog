import Link from "next/link";
import styles from "./navigation.module.css";

const navLinks = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/about",
    name: "About",
  },
  {
    id: 3,
    href: "/about/projects",
    name: "Projects",
  },
];

const Navigation = () => {
  return (
    <nav className="font-mono">
      <ul className="flex flex-col md:space-x-4 md:flex-row">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className={styles.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
