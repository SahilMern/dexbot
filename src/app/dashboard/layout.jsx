import Style from "./dashboard.module.css";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/dashboard/Footer/Footer";
import Navbar from "../components/dashboard/navbar/Navbar";
const layout = ({ children }) => {
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.menu}>
          <SideBar />
        </div>
        <div className={Style.content}>
          <Navbar />
          <div className={Style.DashBoardBody}>{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
