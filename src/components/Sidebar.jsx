import "./Sidebar.scss";
import logo from "../assets/images/LogoTaskManager.svg";

import CustomButton from "./CustomButton";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Logo Task Manager" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
