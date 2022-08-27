import React from "react";
import AuthRoutes from "./Routes/AuthRoutes";
import "./index.css";
import Main from "./Routes/Main";
function App() {
  return (
    <React.Fragment>
      <AuthRoutes />
      <Main />
    </React.Fragment>
  );
}

export default App;
