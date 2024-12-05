import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivacyPage from "./components/PrivacyPage.jsx"; // Match the correct casing
import Home from './components/Home';
import TermsandCondition from "./components/TermsandCondition.jsx";
import GrievanceRedressalPage from "./components/GrievanceRedressalPage.jsx";
import WorkWithUs from "./components/WorkWithUs.jsx";
import Partner from "./components/Partner.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/privacy-policy", element: <PrivacyPage /> }, 
      { path: "/terms-and-conditions", element: <TermsandCondition /> },
      { path: "/grievance-redressal-policy", element: <GrievanceRedressalPage/> },
      { path: "/work-with-us", element: <WorkWithUs/> },
      { path: "/partner", element: <Partner/> },
      {path: "/", element: <Home />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
