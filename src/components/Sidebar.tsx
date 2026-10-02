import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">JB</div>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </nav>

      <div className="sidebar-links">
        <a
          href="https://github.com/bozorovjavohir"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="https://t.me/JBSh71" target="_blank" rel="noreferrer">
          Telegram
        </a>

        <a href="mailto:bozorovjavohir075@gmail.com">Email</a>
      </div>
    </aside>
  );
}

export default Sidebar;
