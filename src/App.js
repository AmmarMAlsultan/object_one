// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./layout/Header";
import Home from "./pages/Home";
import "./theem/css/style.css";

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Signup/>
      <Login/> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/logout" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
