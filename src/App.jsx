import React from "react";
import "./App.css";
 import LandingPage from "./Pages/landingpage/LandingPage";
 import HomePage from './Pages/HomePage/HomePage'
 import 'bootstrap/dist/css/bootstrap.min.css';

// import LearningTracks from "./Pages/landingpage/Components/LearningTracks";
// import TrackSlider from "./Pages/landingpage/Components/TrackSlider";
// import CallToAction from "./Pages/landingpage/Components/CallToAction";
function App() {
   
   
  
  return (
    <div>
      {/* <LearningTracks />
      
      {<TrackSlider /> */}
      <HomePage/>
     
    </div>
  );
}


export default App;
