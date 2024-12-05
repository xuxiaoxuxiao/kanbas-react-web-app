// import { useEffect, useState } from "react";
// import { FaUserCircle, FaCheck } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import * as client from "../../Account/client";
// import { FaPencil } from "react-icons/fa6";

// export default function PeopleDetails() {
//     const { uid } = useParams();
//     const [user, setUser] = useState<any>({});
//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [editing, setEditing] = useState(false);

//     const saveUser = async () => {
//         const [firstName, lastName] = name.split(" ");
//         const updatedUser = { ...user, firstName, lastName };
//         await client.updateUser(updatedUser);
//         setUser(updatedUser);
//         setEditing(false);
//         navigate(-1);
//     };
//     const fetchUser = async () => {
//         if (!uid) return;
//         const user = await client.findUserById(uid);
//         setUser(user);
//     };
//     const deleteUser = async (uid: string) => {
//         await client.deleteUser(uid);
//         navigate(-1);
//     };

//     useEffect(() => {
//         if (uid) fetchUser();
//     }, [uid]);
//     if (!uid) return null;
//     return (
//         <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
//             <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
//                 <IoCloseSharp className="fs-1" />
//             </button>
//             <div className="text-center mt-2">
//                 <FaUserCircle className="text-secondary me-2 fs-1" />
//             </div>
//             <hr />
//             <div className="text-danger fs-4 wd-name">
//                 {!editing && (
//                     <FaPencil onClick={() => setEditing(true)}
//                         className="float-end fs-5 mt-2 wd-edit" />)}
//                 {editing && (
//                     <FaCheck onClick={() => saveUser()}
//                         className="float-end fs-5 mt-2 me-2 wd-save" />)}
//                 {!editing && (
//                     <div className="wd-name"
//                         onClick={() => setEditing(true)}>
//                         {user.firstName} {user.lastName}
//                     </div>)}
//                 {user && editing && (
//                     <input className="form-control w-50 wd-edit-name"
//                         defaultValue={`${user.firstName} ${user.lastName}`}
//                         onChange={(e) => setName(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") { saveUser(); }
//                         }} />)}
//             </div>
//             <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br />
//             <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
//             <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
//             <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
//             <hr />
//             <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
//             <button onClick={() => navigate(-1)}
//                 className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
//         </div>
//     );
// }

////////////////////////////editing user email////////////////////
// import { useEffect, useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";
// import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import * as client from "../../Account/client";
// import { FaPencil } from "react-icons/fa6";
// import { FaCheck, FaUserCircle } from "react-icons/fa";
// export default function PeopleDetails() {
//   const { uid} = useParams();
//   const [user, setUser] = useState<any>({});
//   const navigate = useNavigate();

//   const deleteUser = async (uid: string) => {
//     await client.deleteUser(uid);
//     navigate(-1);
//   };

//   const fetchUser = async () => {
//     if (!uid) return;
//     const user = await client.findUserById(uid);
//     setUser(user);
//   };

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [editing, setEditing] = useState(false);
//   const saveUser = async () => {
//     const [firstName, lastName] = name.split(" ");
//     const updatedUser = { ...user, firstName, lastName,email };
//     await client.updateUser(updatedUser);
//     setUser(updatedUser);
//     setEditing(false);
//     navigate(-1);
//   };

//   const roles = ["ADMIN", "FACULTY", "STUDENT","USER"]; 

//   useEffect(() => {
//     if (uid) fetchUser();  
//     }, [uid]);
//     if (!uid) return null;
//     return (
//       <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
//         <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
//           <IoCloseSharp className="fs-1" /> </button>
//         <div className="text-center mt-2"> 
//             <FaUserCircle className="text-secondary me-2 fs-1" /> 
//         </div><hr />
//         <div className="text-danger fs-4 wd-name"> 
//         {!editing && (
//           <FaPencil onClick={() => setEditing(true)}
//               className="float-end fs-5 mt-2 wd-edit" /> )}
//         {editing && (
//               <FaCheck onClick={() => saveUser()}
//               className="float-end fs-5 mt-2 me-2 wd-save" /> )}
//         {!editing && (
//           <div className="wd-name"
//                onClick={() => setEditing(true)}>
//             {user.firstName} {user.lastName}
//           </div>)}
//           {user && editing && (
//           <input className="form-control w-50 wd-edit-name"
//             defaultValue={`${user.firstName} ${user.lastName}`}
//             onChange={(e) => setName(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") { saveUser(); }}}/>)}

//         </div>
//         <b>Roles:</b>  {user && editing ? (
//           <select
//           className="form-select w-50 wd-edit-role"
//           value={user.role}
//           onChange={(e) => setUser({ ...user, role: e.target.value })}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") { saveUser(); }}}
//         >
//           {roles.map((role) => (
//             <option key={role} value={role}>
//               {role}
//             </option>))}
//         </select>): (<div>{user.role}</div>)
//           }

//         {/* <span className="wd-roles">         {user.role}         </span> <br /> */}
//         <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />

//         <b>Email:</b> 
//         {user && editing ? (
//             <input 
//                 className="form-control w-50 wd-edit-email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onKeyDown={(e) => {
//                     if (e.key === "Enter") { saveUser(); }
//                 }}
//             />
//         ) : (
//             <div>{user.email}</div>
//         )}
   
//         {/* <span className="wd-login-id">      {user.email}      </span> <br /> */}
//         <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
//         <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span> 
//         <hr />
//         <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
//         <button onClick={() => navigate(-1)}
//               className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
//         </div> 
//     ); }
import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { FaPencil } from "react-icons/fa6";
import * as client from "../../Account/client";

export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    // Fetch user details
    const fetchUser = async () => {
        if (!uid) return;
        const fetchedUser = await client.findUserById(uid);
        setUser(fetchedUser);
        setName(`${fetchedUser.firstName} ${fetchedUser.lastName}`);
        setEmail(fetchedUser.email);
        setRole(fetchedUser.role);
    };

    // Save user updates
    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName, email, role };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        navigate(-1); // Navigate back
    };

    // Delete user
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4 wd-name">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)} className="float-end fs-5 mt-2 wd-edit" />
                )}
                {editing && (
                    <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 me-2 wd-save" />
                )}
                {!editing ? (
                    <div className="wd-name" onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                ) : (
                    <input
                        className="form-control w-50 wd-edit-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && saveUser()}
                    />
                )}
            </div>

            <b>Role:</b>
            {!editing ? (
                <span className="wd-roles">{user.role}</span>
            ) : (
                <select
                    className="form-select w-50 wd-edit-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="ADMIN">ADMIN</option>
                    <option value="FACULTY">FACULTY</option>
                    <option value="STUDENT">STUDENT</option>
                    <option value="USER">USER</option>
                </select>
            )}
            <br />

            <b>Email:</b>
            {!editing ? (
                <span className="wd-email">{user.email}</span>
            ) : (
                <input
                    className="form-control w-50 wd-edit-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && saveUser()}
                />
            )}
            <br />

            <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
            <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
            <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete">
                Delete
            </button>
            <button onClick={() => navigate(-1)} className="btn btn-secondary float-start float-end me-2 wd-cancel">
                Cancel
            </button>
        </div>
    );
}
