import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/:type" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
