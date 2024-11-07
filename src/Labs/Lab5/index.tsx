import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParamenters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
    return (
      <div id="wd-lab5" className="ms-3">
        <h3>Lab 5</h3>
        <div className="list-group">
          <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
             Welcome
          </a>
        </div><hr/>
        <EnvironmentVariables />
        <PathParameters />
        <QueryParamenters />
        <WorkingWithObjects />
      </div>
    );
  }
  