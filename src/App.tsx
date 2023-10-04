import './App.css'
import { Route, Routes} from "react-router-dom";
import Avia from "./pages/avia/avia";
import Info from "./pages/info/info";

const App = () => {
    return (
        <div>
                <Routes>
                    <Route path="/avia" element={<Avia/>} />
                    <Route path="/avia/info" element={<Info/>} />
                </Routes>
        </div>

    );
}


export default App
