import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/work" element={<Navigate to="/#work" replace />} />
        <Route
          path="/experience"
          element={<Navigate to="/#experience" replace />}
        />
        <Route
          path="/technology"
          element={<Navigate to="/#technology" replace />}
        />
        <Route
          path="/contact"
          element={<Navigate to="/#contact" replace />}
        />

        <Route path="/work/:slug" element={<CaseStudyPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
