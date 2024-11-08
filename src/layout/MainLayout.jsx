import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <div className="min-h-[calc(100vh-288px)]"></div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;