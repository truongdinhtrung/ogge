import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailFood from "./pages/detail_food";
import Introduce from "./pages/introduce";
import Order from "./pages/oder";
import Profile from "./pages/profile";
import AdDriver from "./pages/AD/driver"; 
import AdStore from "./pages/AD/store";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="detail_food" element={<DetailFood />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="oder" element={<Order />} />
          <Route path="profile" element={<Profile />} />
          <Route path="driver" element={<AdDriver />} /> 
          <Route path="store" element={<AdStore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
