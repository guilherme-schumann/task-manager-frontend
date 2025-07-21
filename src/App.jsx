import { ToastContainer, Zoom } from "react-toastify";

import Tasks from "./components/Tasks";

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
