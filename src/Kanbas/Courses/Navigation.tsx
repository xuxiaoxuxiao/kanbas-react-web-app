
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Getting the course ID from the URL
  const location = useLocation(); // To determine the current path
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];     
   return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
    {links.map((link) => {
      const path = `/Kanbas/Courses/${cid}/${link}`; // Construct the full path

      return (
        <Link 
          key={link} 
          to={path} 
          className={`list-group-item border-0 ${location.pathname === path ? 'text-black active' : 'text-danger'}`}
        >
          {link} {/* Display the link name */}
        </Link>
      );
    })}
  </div>
      )

  ;}
