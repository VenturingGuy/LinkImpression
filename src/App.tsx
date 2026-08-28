import type { ReactElement } from "react";
import { demoPage } from "./data/demoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BasePage from "./components/Pages/BasePage/BasePage";
import SchedulePage from "./components/Pages/SchedulePage/SchedulePage";

export default function App(): ReactElement {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BasePage {...demoPage} />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
      </Router>
    </>
  );
}