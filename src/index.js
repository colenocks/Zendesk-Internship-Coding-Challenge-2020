import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TicketProvider } from "./contextAPI/ticketApi";

ReactDOM.render(
  <React.StrictMode>
    <TicketProvider>
      <Router>
        <App />
      </Router>
    </TicketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
