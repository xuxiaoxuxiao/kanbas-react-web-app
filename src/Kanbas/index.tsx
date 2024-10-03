// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KanbasNavigation from "./Navigation";
// import Courses from "./Courses";
// import "./styles.css";
// import Labs from "../Labs";

// export default function Kanbas() {
//   return (
//     <div id="wd-kanbas">
//       <KanbasNavigation />
//       <div className="wd-main-content-offset p-3">     
//           <Routes>
//             <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
//             <Route path="/Account/*" element={<Account />} />
//             <Route path="/Dashboard" element={<Dashboard />} />
//             <Route path="/Courses/:cid/*" element={<Courses />} />
//             <Route path="/Calendar" element={<h1>Calendar</h1>} />
//             <Route path="/Inbox" element={<h1>Inbox</h1>} />
//             <Route path="/Labs/*" element={<Labs />} />
//           </Routes>
//         </div>
//     </div>

// );}
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Labs from "../Labs";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="d-flex">
      {/* KanbasNavigation - Hidden on small screens */}
      <div className="d-none d-sm-block">
        <KanbasNavigation />
      </div>

      {/* Main content area */}
      <div className="wd-main-content-offset flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </div>
  );
}
