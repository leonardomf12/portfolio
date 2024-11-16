import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./segments.js";
// import { Header } from "./segments.js";

function App2() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-blue-500 text-white p-4 h-[10vh]">
        <Header />
      </div>

      <div className="bg-blue-100 text-black p-4 flex-1">
        <Home />
      </div>
    </div>
  );
}

const Home = () => {
  return(
    <div> Hello Home</div>
  );
}

const Header = () => {
  return(
    <div> Hello Header</div>
  );
}

const Experience = () => {
  return(
    <div> Hello Experience</div>
  );
}

const Projects = () => {
  return(
    <div> Hello Projects</div>
  );
}

const Contact = () => {
  return(
    <div> Hello Contact</div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
