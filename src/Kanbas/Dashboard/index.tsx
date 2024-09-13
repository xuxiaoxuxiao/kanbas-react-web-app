import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
                Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>

        <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1235/Home">
              CS1235 React JS Intermediate
            </Link>
            <p className="wd-dashboard-course-title">
                Full Stack software developer Intermediate
            </p>
            <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1236/Home">
              CS1236 React JS Advanced
            </Link>
            <p className="wd-dashboard-course-title">
                Full Stack software developer Advanced
            </p>
            <Link to="/Kanbas/Courses/1236/Home"> Go </Link>
          </div>  
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1244/Home">
              CS1244
            </Link>
            <p className="wd-dashboard-course-title">
                Intro to Computer Networking
            </p>
            <Link to="/Kanbas/Courses/1244/Home"> Go </Link>
          </div>  
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1254/Home">
              CS1254
            </Link>
            <p className="wd-dashboard-course-title">
                Intermediate Computer Networking
            </p>
            <Link to="/Kanbas/Courses/1254/Home"> Go </Link>
          </div>  
        </div>
        <br/>

        <br/>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1264/Home">
              CS1264
            </Link>
            <p className="wd-dashboard-course-title">
                Advanced Computer Networking
            </p>
            <Link to="/Kanbas/Courses/1264/Home"> Go </Link>
          </div>  
        </div>
        <br/>
        
        <br/>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5002/Home">
              CS5002
            </Link>
            <p className="wd-dashboard-course-title">
                Discrete Structures
            </p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>  
        </div>
        <br/>

        <br/>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home">
              CS5004
            </Link>
            <p className="wd-dashboard-course-title">
                Object Oriented Design
            </p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>  
        </div>
        <br/>

      </div>
    </div>
  );
}
