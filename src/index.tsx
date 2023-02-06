import React from "react";
import ReactDOM from "react-dom/client";
import { ContextWrapper } from "./Context/ContextWrapper";
import "./index.css";
import Router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
	<ContextWrapper>
    	<Router />
	</ContextWrapper>
  </React.StrictMode>
);
