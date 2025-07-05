// ===== src/App.jsx =====
import React from "react";
<<<<<<< HEAD
import "./App.css";
import LandingPage from "./Pages/landingpage/LandingPage";
import HomePage from './Pages/HomePage/HomePage';
import Track from "./Pages/Track/Track";

import 'bootstrap/dist/css/bootstrap.min.css';
import Jops from "./Pages/Jops/Jops";
import JopDetails from "./Pages/JopDetails/JopDetails";

function App() {
  return (
    <div>
      <JopDetails />
      
=======
import ExamPage from "./Pages/student/ExamPage";
import "./app.css"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ExamPage />
>>>>>>> 1f04eaa870a786c102f0f52e2477ae9e86d861d0
    </div>
  );
}

export default App;
