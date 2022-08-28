import React, { useEffect } from "react";
import AuthRoutes from "./Routes/AuthRoutes";
import "./index.css";
import "./App.css";
import Main from "./Routes/Main";
import WebFont from "webfontloader";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Urbanist"],
      },
    });
  });
  return (
    <React.Fragment>
      <AuthRoutes />
      <Main />
    </React.Fragment>
  );
}

export default App;
