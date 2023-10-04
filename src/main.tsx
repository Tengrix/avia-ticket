import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Avia from "./pages/avia/avia";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Info from "./pages/info/info";

const router = createBrowserRouter([
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
    }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
