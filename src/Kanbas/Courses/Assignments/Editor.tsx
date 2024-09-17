export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
            </td>
            <td>
            <input id="wd-points" value={100} />
            </td>
          </tr>
        
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group"> 
              <option value="Quizzes">QUIZZES</option>
              <option value="Exams">EXAMS</option>
              <option value="Projects">PROJECT</option>
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
            </td>
        </tr><br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as"> 
              <option value="Points">Points</option>
              <option selected value="Percentage">Percentage</option>
            </select>
            </td>
        </tr><br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type"> 
              <option value="OnPaper">On Paper</option>
              <option selected value="Online">Online</option>
            </select> <br /> <br />
          
              <tr> 
              <label htmlFor="wd-submission-type">Online Entry Options</label>
              </tr>
              <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
              
              <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br/>   
            </td>
        </tr><br />

        <tr>
          <td align="right" valign="top">
          <label>Assign </label>   
          </td>
          <td align="left" valign="top">
          <label htmlFor="wd-assign-to">Assign to</label>
          <br />   
          <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr><br />
        
        <tr>
          <td></td>
          <td align = "left" valign="top">
          <label htmlFor="wd-due-date"> Due </label>
          <br />
          <input type="date"id="wd-due-date"value="2024-05-13"/>
          </td>
        </tr><br />


        <tr>
          <td></td>
          <td align = "left" valign="top">
          <label htmlFor="wd-available-from">Available from </label>
          <br />
          <input type="date"id="wd-available-from"value="2024-05-13"/><br/>
          </td>
          <td align="left"valign="top">
          <label htmlFor="wd-available-until">Until </label><br />
          <input type="date"id="wd-available-until"value="2024-05-13"/><br/>
          </td>
          </tr>

        {/* Complete on your own */}
      
        <td><hr /></td>
        <td><hr /></td>
        <td align = "right" valign="top">
        <hr /> 
        <button>Cancel</button>
        <button>Save</button>
        </td>
      </table>
      </div>

  
);}
