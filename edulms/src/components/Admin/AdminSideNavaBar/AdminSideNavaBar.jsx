import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";

const AdminSideNavaBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);

  const SideBar = () => {
    setIsSideBar((prev) => !prev);
  };
  return (
     <>
      
      <header className="header -dashboard -dark-bg-dark-1 js-header">
        <div className="header__container py-20 px-30">
          <div className="row justify-between items-center">
            <div class="col-auto">
              <div class="d-flex items-center">
                <div class="header__explore text-dark-1">
                  <button class="d-flex items-center js-dashboard-home-9-sidebar-toggle" onClick={SideBar}>
                    <i class="icon -dark-text-white icon-explore"></i>
                  </button>
                </div>
                <div class="header__logo ml-30 md:ml-20">
                  <Link data-barba="true" to="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="140"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      class="-light-d-none"
                      src="/assets/img/general/logo.svg"
                      style={{ color: "transparent" }}
                    />
                    <img
                      alt="logo"
                      loading="lazy"
                      width="140"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      class="-dark-d-none"
                      src="/assets/img/general/logo-dark.svg"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <div
          id="dashboardOpenClose"
          className={`dashboard -home-9 js-dashboard-home-9 ${isSideBar ? "-is-sidebar-hidden" : ""}`}
        >
          <div class="dashboard__sidebar scroll-bar-1">
            <div class="sidebar -dashboard">
              <div class="sidebar__item   -is-active ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/dashboard"
                >
                  <i class="text-20 icon-discovery mr-15"></i>Dashboard
                </Link>
              </div>
              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/ManageCourses"
                >
                  <i class="text-20 icon-play-button mr-15"></i>Course Management
                </Link>
              </div>
              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to=""
                >
                  <i class="text-20 icon-bookmark mr-15"></i> Student Management
                </Link>
              </div>

              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/EnrollmentList"
                >
                  <i class="text-20 icon-bookmark mr-15"></i> Enrollment List
                </Link>
              </div>

              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/ProgressTracking"
                >
                  <i class="text-20 icon-bookmark mr-15"></i> Progress Tracking
                </Link>
              </div>

              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/CommunicationTools"
                >
                  <i class="text-20 icon-bookmark mr-15"></i> Communication Tools
                </Link>
              </div>

              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/ManageCertificates"
                >
                  <i class="text-20 icon-bookmark mr-15"></i> Manage Certificates
                </Link>
              </div>

              <div class="sidebar__item    ">
                <Link
                  class="d-flex items-center text-17 lh-1 fw-500 "
                  to="/MasterLiveClass"
                >
                  <i class="text-20 icon-bookmark mr-15"></i> Master of Live Class
                </Link>
              </div>
          
             
              <div class="sidebar__item    ">
                <Link class="d-flex items-center text-17 lh-1 fw-500 " to="/">
                  <i class="text-20 icon-power mr-15"></i>Logout
                </Link>
              </div>
            </div>
          </div>

         
        </div>
      </div>
   
      </>
  );
};

export default AdminSideNavaBar;


// import React, { useState } from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import DashBoard from "../DashBoard/DashBoard";
// import ManageCourse from "../ManageCourses/ManageCourse";


// const AdminSideNavaBar = () => {
//   const [isSideBar, setIsSideBar] = useState(false);

//   const toggleSidebar = () => {
//     setIsSideBar((prev) => !prev);
//   };

//   return (
//     <div>
//       <header className="header -dashboard -dark-bg-dark-1 js-header">
//         <div className="header__container py-20 px-30">
//           <div className="row justify-between items-center">
//             <div className="col-auto">
//               <div className="d-flex items-center">
//                 <div className="header__explore text-dark-1">
//                   <button
//                     className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
//                     onClick={toggleSidebar}
//                   >
//                     <i className="icon -dark-text-white icon-explore"></i>
//                   </button>
//                 </div>
//                 <div className="header__logo ml-30 md:ml-20">
//                   <Link to="/">
//                     <img
//                       alt="logo"
//                       width="140"
//                       height="50"
//                       src="/assets/img/general/logo.svg"
//                       className="-light-d-none"
//                       style={{ color: "transparent" }}
//                     />
//                     <img
//                       alt="logo"
//                       width="140"
//                       height="50"
//                       src="/assets/img/general/logo-dark.svg"
//                       className="-dark-d-none"
//                       style={{ color: "transparent" }}
//                     />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="content-wrapper js-content-wrapper overflow-hidden">
//         <div
//           className={`dashboard -home-9 js-dashboard-home-9 ${isSideBar ? "-is-sidebar-hidden" : ""}`}
//         >
//           <div className="dashboard__sidebar scroll-bar-1">
//             <div className="sidebar -dashboard">
//               <SidebarItem to="" icon="icon-discovery" label="Dashboard" />
//               <SidebarItem to="managecourse" icon="icon-play-button" label="Course Creation" />

             
//               <SidebarItem to="/" icon="icon-power" label="Logout" />
//             </div>
//           </div>

       
//             <Routes>
//               <Route path="" element={<DashBoard />} />
//               <Route path="managecourse" element={<ManageCourse/>}/>
//             </Routes>
        
//         </div>
//       </div>
//     </div>
//   );
// };

// const SidebarItem = ({ to, icon, label }) => (
//   <div className="sidebar__item">
//     <Link className="d-flex items-center text-17 lh-1 fw-500" to={to}>
//       <i className={`text-20 ${icon} mr-15`}></i>
//       {label}
//     </Link>
//   </div>
// );

// export default AdminSideNavaBar;


