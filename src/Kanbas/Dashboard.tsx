import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;

  const imageExists = (src: string) => {
    let img = new Image();
    img.src = src;
    return img.complete;  // Returns true if image exists, false if not
  };
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >

                  {/* Conditional image rendering */}
                  {imageExists(`/images/${course._id}.jpg`) ? (
                    <img
                      src={`/images/${course._id}.jpg`}
                      alt={`Image for ${course.name}`}
                      className="card-img-top"
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                  ) : (
                    <img
                      src="/images/darkblue.jpg"
                      alt="Default image"
                      className="card-img-top"
                      style={{ height: "160px", objectFit: "cover" }}
                    />
                  )}
              
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{ height: "24px" }}>
                  {course.name} 
                  </h5>
                  <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
              </div>
              </div>
        ))}
          </div>
        </div>
      </div>
    );}


