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
import SubHeader from "./components/SubHeader.jsx";
import AIData from "./AIData.js";
import IotData from "./IoTData.js";
import Staff from "./components/Staff.jsx";
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
      {path: "/", element: <Home />},
      {path: "/staff", element: <Staff />},
      {path: "/iot", element: <SubHeader Data={IotData} />},
      {path:"/ai",element: <SubHeader Data={AIData} />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
