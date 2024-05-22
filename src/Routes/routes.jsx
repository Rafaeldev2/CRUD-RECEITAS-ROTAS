import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import LoginForm from "../Pages/LoginForm"
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
            {
                path: "/LoginForm",
                element: <LoginForm />
            },
        ]
    },
])

export default router;