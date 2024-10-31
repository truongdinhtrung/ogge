import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import DetailFood from "./pages/detail_food";
import Introduce from "./pages/introduce";
import Order from "./pages/oder";
import './index.css';
import Profile from "./pages/profile";

function App(){
  return(
    <Router>
      <div className="App">
        <Routes>
          <Route path="detail_food" element={<DetailFood></DetailFood>}/>
          <Route path="introduce" element={<Introduce></Introduce>}/>
          <Route path="oder" element={<Order></Order>}/>
          <Route path="profile" element={<Profile></Profile>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;