// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from "react-router-dom";
import HeaderLogin from "./layout/HeaderLogin"
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <HeaderLogin/>
      {/* <Signup/>
      <Login/> */}
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
