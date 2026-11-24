
import { Routes, Route } from "react-router-dom";

import PublicRoutes from "../modules/public/routes/PublicRoutes";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Website */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* Future Customer Routes */}
      {/* <Route path="/customer/*" element={<CustomerRoutes />} /> */}

      {/* Future Admin Routes */}
      {/* <Route path="/admin/*" element={<AdminRoutes />} /> */}
    </Routes>
  );
}

export default AppRoutes;