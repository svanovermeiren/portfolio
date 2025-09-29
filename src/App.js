import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import Projects from './pages/Projects';
import ASUSolarCarSuspension from './pages/ASUSolarCarSuspension';
import ASUSolarCarMechanicalSystems from './pages/ASUSolarCarMechanicalSystems';
import ASUSolarCarChassis from './pages/ASUSolarCarChassis';
import ASUSolarCarFrontSuspension from './pages/ASUSolarCarFrontSuspension';
import ASUSolarCarSteering from './pages/ASUSolarCarSteering';
import ASUSolarCarBrakes from './pages/ASUSolarCarBrakes';
import AutomatedNFTHydroponicSystem from './pages/AutomatedNFTHydroponicSystem';
import ASUSolarCarWeldingTable from './pages/ASUSolarCarWeldingTable';
import FiniteElementCodingCourseProjects from './pages/FiniteElementCodingCourseProjects';
import ThreeDPrintedArcReactor from './pages/ThreeDPrintedArcReactor';
import CustomGPUSupportBracket from './pages/CustomGPUSupportBracket';
import SafetyWireBoltDrillingFixture from './pages/SafetyWireBoltDrillingFixture';
import AZGFDAeration from './pages/AZGFDAeration';
import WindTurbine from './pages/WindTurbine';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

function Home() {
  return (
    <div className="content">
      <div className="left-column">
        <img
          src={require('./images/Profile.jpg')}
          alt="Profile"
          className="profile-pic"
        />
        <h1>Steven Van Overmeiren</h1>
        <p className="university-info">Arizona State University • Class of 2026</p>
        <h3 className="title-header">Mechanical Engineering Graduate Student</h3>
        <p className="summary"> 
          Hi, I'm Steven, a graduate student at Arizona State University, studying Mechanical Engineering. I also earned my bachelor's in Mechanical Engineering in May 2025. I am very passionate about mechanical design, 
          finite element analysis, and manufacturing, and I am most interested in contributing to fast-paced, mission-orented companies in the automotive and aerospace industries.
        </p>
        <div className="button-container">
          <Link to="/projects" className="projects-button">View My Projects</Link>
          <Link to="/resume" className="resume-button">Resume</Link>
        </div>
        <div className="social-buttons">
          <a
            className="social-button linkedin-button" 
            href="https://www.linkedin.com/in/steven-van-overmeiren//" 
            target="_blank" 
            rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a className="social-button email-button" href="mailto:svanovermeiren1@gmail.com">
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="right-column">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
          As I look back on my path in engineering, I have realized that what excites me most is the process of turning curiosity into understanding and challenges into solutions. I’ve always been fascinated 
          by the mechanics that govern the world behind the world around me - how structures hold, how systems work, and how design choices influence outcomes. Digging deeper and asking questions isn’t just a 
          habit for me; it’s how I remain connected to the bigger picture of engineering.
          <br /><br />
          For me, solving a problem is as much about the journey as the outcome. I don't find challenges discouraging, instead they excite me. I enjoy the processes of trial-and-error, and relish in the 
          persistence required to navigate setbacks, and the clarity that comes from finally piecing things together. The moments of insight that emerge are what make the work truly rewarding. This is a 
          big reason why I entered graduate school, so I could pursue a deeper understanding of the world around me.
          <br /><br />
          I'm truly driven by the desire to continue learning, building, and refining how I approach problems. I believe that the most meaningful solutions arise from resilience, curiosity, and the willingness 
          to reassess assumptions. As I continue to grow as an engineer, I’m enthusiastic to keep asking new questions and to push myself to the next level as I embark on the ultimate chapter of my journey
          post-graduation in the spring.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/solar-car-suspension" element={<ASUSolarCarSuspension />} />
            <Route path="/projects/solar-car-mechanical-systems" element={<ASUSolarCarMechanicalSystems />} />
            <Route path="/projects/mechanical-systems/chassis" element={<ASUSolarCarChassis />} />
            <Route path="/projects/mechanical-systems/front-suspension" element={<ASUSolarCarFrontSuspension />} />
            <Route path="/projects/mechanical-systems/steering" element={<ASUSolarCarSteering />} />
            <Route path="/projects/mechanical-systems/brakes" element={<ASUSolarCarBrakes />} />
            <Route path="/projects/solar-car-welding-table" element={<ASUSolarCarWeldingTable />} />
            <Route path="/projects/finite-element-coding-course-projects" element={<FiniteElementCodingCourseProjects />} />
            <Route path="/projects/3d-printed-arc-reactor" element={<ThreeDPrintedArcReactor />} />
            <Route path="/projects/custom-gpu-support-bracket" element={<CustomGPUSupportBracket />} />
            <Route path="/projects/safety-wire-bolt-drilling-fixture" element={<SafetyWireBoltDrillingFixture />} />
            <Route path="/projects/aeration-project" element={<AZGFDAeration />} />
            <Route path="/projects/wind-energy" element={<WindTurbine />} />
            <Route path="/projects/automated-nft-hydroponic-system" element={<AutomatedNFTHydroponicSystem />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
