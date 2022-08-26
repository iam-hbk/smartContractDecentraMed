import { Route, Routes } from "react-router-dom";
import Welcome from "../Pages/Welcome";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}

export default AuthRoutes;
