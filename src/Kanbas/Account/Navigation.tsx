import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation(); // To determine the current path
  const links = ["Signin", "Signup", "Profile"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Account/${link}`;
        const isActive = location.pathname === path; // Simplified active check

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {link} {/* Display the link name */}
          </Link>
        );
      })}
    </div>
  );
}


