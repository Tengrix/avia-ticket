import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {HashRouter} from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children: [
//             {
//                 path: "avia",
//                 element: <Avia/>
//             },
//             {
//                 path: "avia/info",
//                 element: <Info/>
//             }
//         ]
//     }
//
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HashRouter basename={'/avia-ticket/'}>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
)
