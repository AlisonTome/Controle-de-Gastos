import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";

import Login from "./pages/login";
import Teste from "./teste";

export default function Rota() {
    <Router>
        <Routes>
            <Route path='/' element={< Login />} />
            <Route path='/teste' element={< Teste />} /> 
        </Routes>
    </Router>
}