import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import UserContext from "./UserContext/UserContext";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <HelmetProvider>
        <div className="mx-[50px]">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </UserContext>
  </React.StrictMode>
);
