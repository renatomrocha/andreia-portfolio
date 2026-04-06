import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <div className="h-screen max-w-full overflow-hidden bg-white font-inter flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/:projectName" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
