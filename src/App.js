import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import AnalyzePage from "./pages/AnalyzePage";
import Footer from "./pages/Footer";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        {/* Pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>

        {/* Footer always visible */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;