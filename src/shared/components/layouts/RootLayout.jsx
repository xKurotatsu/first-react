import { Outlet } from "react-router-dom";
import Footer from "../partials/Footer";
import Header from "../partials/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
