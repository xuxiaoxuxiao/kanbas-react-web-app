import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Getting the course ID from the URL
  const location = useLocation(); // To determine the current path
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`; // Construct the full path

        // Check if the current link is 'Assignments' and match it to both /Assignments and /Assignments/:aid
        const isActive =
          location.pathname.startsWith(`/Kanbas/Courses/${cid}/Assignments`)
          ? link === "Assignments"
          : location.pathname === path;

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border-0 ${isActive ? 'text-black active' : 'text-danger'}`}
          >
            {link} {/* Display the link name */}
          </Link>
        );
      })}
    </div>
  );
}
