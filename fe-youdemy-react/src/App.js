import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/:type" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
