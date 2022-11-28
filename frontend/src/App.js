import React from "react"; 
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './global.css';

import Login from "./pages/login";

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={< Login />} />
        </Routes>
    </Router>
  );
}


export default App;