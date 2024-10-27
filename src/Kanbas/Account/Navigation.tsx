import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  //const { pathname } = useLocation();
  const location = useLocation(); // To determine the current path


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


