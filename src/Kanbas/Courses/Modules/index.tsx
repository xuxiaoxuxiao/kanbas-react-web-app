export default function Modules() {
    return (
      <div>
        
        <div className="wd-actions">
          <button id="wd-collapse-all" onClick={() => alert("Collapse All")} type="button">
            Collapse All</button>
        
          <button id="wd-view-progress" onClick={() => alert("View Progress")} type="button">
            View Progress</button>

          <button id="wd-publish-all" onClick={() => alert("Publish All")} type="button">
            Publish All</button>
          <button id="wd-add-module" onClick={() => alert("Add a Module")} type="button">
            + Module</button>
        </div>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1 -Course Introduction, Syllabus, Agenda, Internet, Web, HTML, Assignment</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development Links to an external site.</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application </li>  
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
              </li>

              <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
                  <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  