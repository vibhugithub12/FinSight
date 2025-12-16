import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  const hideFooter = location.pathname == "/notFound";

  return (
   <div className="min-h-screen flex flex-col font-mobile">
      <Navbar />
      <div className="flex-1 mt-16 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
