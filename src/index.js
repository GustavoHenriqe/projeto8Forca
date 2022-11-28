import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App"
import "./style/reset.css"
import "./style/style.css"

function Index() {
  return (
    <React.StrictMode>
        <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.querySelector("main")).render(<Index />)