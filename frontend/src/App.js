import React from "react"; 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './global.css';

import Login from "./pages/login";
import Registro from "./pages/register";
import Profile from "./pages/profile";
import New from "./pages/new";

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={< Login />} />
          <Route path='/register' element={< Registro />} />

          <Route path='/profile' element={< Profile />} />
          <Route path='/spending/new' element={< New />} />
        </Routes>
    </Router>
  );
}


export default App;