import { createBrowserRouter } from "react-router-dom";
import Home from "../../screen/Home/Home";
import Navbar from "../../components/Navbar";





const Router = createBrowserRouter([
    {

        path: '/', element:
            <>
                <Navbar /> <Home />
            </>
    },
    // {
    //     children: [
    //         {
    //             path: 'attendance', element: <Attendance />
    //         }
    //     ]
    // }
])

export default Router