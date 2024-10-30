import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { TiHome } from "react-icons/ti";
import { SiGoogleanalytics } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotifications } from "react-icons/io";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      {isFaculty &&(
      <h2>Course Status</h2>)}
      <div className="d-flex flex-column">
      {isFaculty &&(
        <div className="d-flex mb-2">
          <button className="btn btn-lg btn-secondary w-50 me-1 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish 
          </button>
      
          <button className="btn btn-lg btn-success w-50">
            <FaCheckCircle className="me-2 fs-5" /> Publish 
          </button>
        </div>)} 
      <br />
      {isFaculty &&(
        <div>
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <BiImport className="me-2 fs-5" /> 
              Import Existing Content 
          </button>
            
          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <LiaFileImportSolid className="me-2 fs-5" /> 
              Import from Commons 
          </button>

          <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
            <TiHome className="me-2 fs-5" /> Choose Home Page 
          </button>
        </div>)}

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <SiGoogleanalytics className="me-2 fs-5" /> View Course Stream 
        </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <TfiAnnouncement className="me-2 fs-5" /> New Announcement 
        </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <SiGoogleanalytics className="me-2 fs-5" /> New Analytics 
        </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <IoIosNotifications className="me-2 fs-5" /> View Course Notifications 
        </button>
      </div>
    </div>
);}
