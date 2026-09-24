import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/tokens.css";
import "./styles/global.css";
import App from "./App.tsx";

const GA_ID = "G-Y4SHLFTM2H";

const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
document.head.appendChild(script);

(window as any).dataLayer = (window as any).dataLayer || [];
(window as any).gtag = function (...args: unknown[]) {
  (window as any).dataLayer.push(args);
};

(window as any).gtag("js", new Date());
(window as any).gtag("config", GA_ID);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
