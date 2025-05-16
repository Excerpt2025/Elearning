import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from './components/navheader/Navbar';
import NotFound from "./pages/Notfound";
import Footer from "./components/Footer/Footer";
import AllCourse from "./pages/AllCourse/AllCourse";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import CourseCart from "./components/CourseCart/CourseCart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CourseCheckout from "./components/CourseCheckout/CourseCheckout";
import TermConditions from "./components/TermConditions/TermConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./pages/ContactUs/ContactUs";
import DashBoard from "./components/Admin/DashBoard/DashBoard";
import AdminSideNavaBar from "./components/Admin/AdminSideNavaBar/AdminSideNavaBar";
import ManageCourses from "./components/Admin/ManageCourses/ManageCourse";
import EnrollmentList from "./components/Admin/EnrollmentList/EnrollmentList";
import ProgressTracking from "./components/Admin/ProgressTracking/ProgressTracking";
import CommunicationTools from "./components/Admin/CommunicationTools/CommunicationTools";
import ManageCertificates from "./components/Admin/ManageCertificates/ManageCertificates";
import MasterLiveClass from "./components/Admin/MasterLiveClass/MasterLiveClass";

function App() {
  return (
    <div>
      <Router> {/* Ensure Router wraps everything */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AllCourse" element={<AllCourse/>}/>
          <Route path="/CourseDetails" element={<CourseDetails/>}/>
          <Route path="/CourseCart" element={<CourseCart/>}/>
          <Route path="/coursCheckOut" element={<CourseCheckout/>}/>
          <Route path="/Login"  element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
          <Route path="/TermConditions" element={<TermConditions/>}/>
          <Route path="/AdminSideNavaBar" element={<AdminSideNavaBar/>}/>
          <Route path="/ManageCourses" element={<ManageCourses/>}/>
          <Route path="/EnrollmentList" element={<EnrollmentList/>}/>
          <Route path="/ProgressTracking" element={<ProgressTracking/>}/>
          <Route path="/CommunicationTools" element={<CommunicationTools/>}/>
          <Route path="/ManageCertificates" element={<ManageCertificates/>}/>
          <Route path="/MasterLiveClass" element={<MasterLiveClass/>}/>
          {/* Admin Routes */}
          <Route path="/DashBoard" element={<DashBoard/>}/>

          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
