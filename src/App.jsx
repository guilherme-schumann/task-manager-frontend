import { ToastContainer, Zoom } from "react-toastify";

import "./App.scss";

import Tasks from "./components/Tasks";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <Tasks />
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnMover
                theme="dark"
                transition={Zoom}
            />
        </div>
    );
};

export default App;
