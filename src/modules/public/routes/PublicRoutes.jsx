
import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/home/Home";

import NotFound from "../../../components/common/NotFound";

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default PublicRoutes;