import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

/** Shows the shared parts around every page. */
const Layout = () => {
  return (
    <div id="content">
      <Header />
      <Outlet />
      <Footer />
      {/* Form messages */}
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
