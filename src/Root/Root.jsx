import { Outlet } from "react-router-dom";
import Headers from "./RootComponents/Headers";
import Footer from "./RootComponents/Footer";

const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;