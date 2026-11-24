
import { Outlet } from "react-router-dom";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import ScrollToTop from "../../../components/common/ScrollToTop";

function PublicLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default PublicLayout;