import NavLink from "@/app/ui/header/NavLink";

export default function MainNav() {
  return (
    <nav className="hidden md:block bg-light-secondary dark:bg-dark-secondary/90 backdrop-blur px-3 py-2">
      <ul className="flex justify-center gap-6">
        <li>
          <NavLink name="My mind" href="/" />
        </li>
        <li>
          <NavLink name="About" href="/about" />
        </li>
      </ul>
    </nav>
  );
}
