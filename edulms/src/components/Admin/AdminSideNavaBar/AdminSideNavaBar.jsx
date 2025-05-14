// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import DashBoard from "../DashBoard/DashBoard";

// const AdminSideNavaBar = () => {
//   const [isSideBar, setIsSideBar] = useState(false);

//   const SideBar = () => {
//     setIsSideBar((prev) => !prev);
//   };
//   return (
//     <div>
//       <header className="header -dashboard -dark-bg-dark-1 js-header">
//         <div className="header__container py-20 px-30">
//           <div className="row justify-between items-center">
//             <div class="col-auto">
//               <div class="d-flex items-center">
//                 <div class="header__explore text-dark-1">
//                   <button class="d-flex items-center js-dashboard-home-9-sidebar-toggle" onClick={SideBar}>
//                     <i class="icon -dark-text-white icon-explore"></i>
//                   </button>
//                 </div>
//                 <div class="header__logo ml-30 md:ml-20">
//                   <a data-barba="true" href="/">
//                     <img
//                       alt="logo"
//                       loading="lazy"
//                       width="140"
//                       height="50"
//                       decoding="async"
//                       data-nimg="1"
//                       class="-light-d-none"
//                       src="/assets/img/general/logo.svg"
//                       style={{ color: "transparent" }}
//                     />
//                     <img
//                       alt="logo"
//                       loading="lazy"
//                       width="140"
//                       height="50"
//                       decoding="async"
//                       data-nimg="1"
//                       class="-dark-d-none"
//                       src="/assets/img/general/logo-dark.svg"
//                       style={{ color: "transparent" }}
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="content-wrapper js-content-wrapper overflow-hidden">
//         <div
//           id="dashboardOpenClose"
//           className={`dashboard -home-9 js-dashboard-home-9 ${isSideBar ? "-is-sidebar-hidden" : ""}`}
//         >
//           <div class="dashboard__sidebar scroll-bar-1">
//             <div class="sidebar -dashboard">
//               <div class="sidebar__item   -is-active ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dashboard"
//                 >
//                   <i class="text-20 icon-discovery mr-15"></i>Dashboard
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-courses"
//                 >
//                   <i class="text-20 icon-play-button mr-15"></i>Course Creation
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-bookmarks"
//                 >
//                   <i class="text-20 icon-bookmark mr-15"></i> Content Upload and Management
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-messages"
//                 >
//                   <i class="text-20 icon-message mr-15"></i>Management of Live Classes
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-listing"
//                 >
//                   <i class="text-20 icon-list mr-15"></i>Create Course
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-reviews"
//                 >
//                   <i class="text-20 icon-comment mr-15"></i>Course Enrollment Management
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-settings"
//                 >
//                   <i class="text-20 icon-setting mr-15"></i>Course Analytics and Reporting
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-administration"
//                 >
//                   <i class="text-20 icon-person-2 mr-15"></i>User Registrations and Profiles
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-assignment"
//                 >
//                   <i class="text-20 icon-edit mr-15"></i>Course Navigation
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-calendar"
//                 >
//                   <i class="text-20 icon-calendar mr-15"></i>Multi-media delivery
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-dashboard"
//                 >
//                   <i class="text-20 icon-discovery mr-15"></i>Communication
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-dictionary"
//                 >
//                   <i class="text-20 icon-book mr-15"></i>Certification
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-forums"
//                 >
//                   <i class="text-20 icon-access mr-15"></i>Setting up payment gateways
//                 </a>
//               </div>
//               <div class="sidebar__item    ">
//                 <a
//                   class="d-flex items-center text-17 lh-1 fw-500 "
//                   href="/dshb-grades"
//                 >
//                   <i class="text-20 icon-badge mr-15"></i>Configuring email notifications.
//                 </a>
//               </div>
             
//               <div class="sidebar__item    ">
//                 <a class="d-flex items-center text-17 lh-1 fw-500 " href="/">
//                   <i class="text-20 icon-power mr-15"></i>Logout
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="dashboard__main-content">
//             <Routes>
//               <Route path="/DashBoard" element={<DashBoard />} />
              
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminSideNavaBar;


import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import ManageCourse from "../ManageCourses/ManageCourse";


const AdminSideNavaBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);

  const toggleSidebar = () => {
    setIsSideBar((prev) => !prev);
  };

  return (
    <div>
      <header className="header -dashboard -dark-bg-dark-1 js-header">
        <div className="header__container py-20 px-30">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header__explore text-dark-1">
                  <button
                    className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                    onClick={toggleSidebar}
                  >
                    <i className="icon -dark-text-white icon-explore"></i>
                  </button>
                </div>
                <div className="header__logo ml-30 md:ml-20">
                  <Link to="/">
                    <img
                      alt="logo"
                      width="140"
                      height="50"
                      src="/assets/img/general/logo.svg"
                      className="-light-d-none"
                      style={{ color: "transparent" }}
                    />
                    <img
                      alt="logo"
                      width="140"
                      height="50"
                      src="/assets/img/general/logo-dark.svg"
                      className="-dark-d-none"
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
          className={`dashboard -home-9 js-dashboard-home-9 ${isSideBar ? "-is-sidebar-hidden" : ""}`}
        >
          <div className="dashboard__sidebar scroll-bar-1">
            <div className="sidebar -dashboard">
              <SidebarItem to="" icon="icon-discovery" label="Dashboard" />
              <SidebarItem to="managecourse" icon="icon-play-button" label="Course Creation" />

             
              <SidebarItem to="/" icon="icon-power" label="Logout" />
            </div>
          </div>

       
            <Routes>
              <Route path="" element={<DashBoard />} />
              <Route path="managecourse" element={<ManageCourse/>}/>
            </Routes>
        
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, label }) => (
  <div className="sidebar__item">
    <Link className="d-flex items-center text-17 lh-1 fw-500" to={to}>
      <i className={`text-20 ${icon} mr-15`}></i>
      {label}
    </Link>
  </div>
);

export default AdminSideNavaBar;
