import {Routes, Route} from "react-router-dom";
import './App.css';
import Login from '../pages/Login';
import DashboardWrapper from "../Wrappers/DashboardWrapper";
import UserWrapper from "../Wrappers/UsersWrapper";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/dashboard' element={<DashboardWrapper/>}/>
                <Route path='/users' element={<UserWrapper/>}/>
            </Routes>
        </div>
    );
}

export default App;
