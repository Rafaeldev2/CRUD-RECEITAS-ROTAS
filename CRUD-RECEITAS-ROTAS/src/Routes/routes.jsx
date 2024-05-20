import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Cadastro",
                element: <Cadastro />
            },
        ]
    },
])

export default router;