import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function PageContent() {
  return (
    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default PageContent;
