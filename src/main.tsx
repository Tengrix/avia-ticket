import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Avia from "./pages/avia/avia";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Info from "./pages/info/info";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "avia",
                element: <Avia/>
            },
            {
                path: "avia/info",
                element: <Info/>
            }
        ]
    },

]
const router = createBrowserRouter(routes, {basename:'/'})

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
