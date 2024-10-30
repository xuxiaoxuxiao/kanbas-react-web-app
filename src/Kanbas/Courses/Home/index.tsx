import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
 
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill d-block">
        <Modules />
      </div>
      <div className="d-none d-xl-block ms-5"> {/* XL - Extra Large (≥1200px) */}        
        <CourseStatus />
      </div>
    </div>
  );
}


