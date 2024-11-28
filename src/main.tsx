import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Jamal from "./pages/jamal.tsx";
import Jane from "./pages/jane.tsx";
import John from "./pages/john.tsx";
import Home from "./pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/jamal" element={<Jamal />} />
          <Route path="/jane" element={<Jane />} />
          <Route path="/john" element={<John />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// import { StrictMode } from "react";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <h1>Hello React!</h1>
//   </StrictMode>
// );
