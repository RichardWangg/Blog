import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home/page_home";
import { My_Account } from "./pages/my_account/page_my_account";
import { Login } from "./pages/login/page_login";
import { Register } from "./pages/login/page_register";


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/search" />
            <Route path = "/myaccount" element = {<My_Account/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/register" element = {<Register/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
