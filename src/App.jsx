
import JopTask from "./Pages/JopTask/JopTask";
import "./app.css"; 
import { BrowserRouter,Route,Routes } from "react-router-dom";
import LandingPage from './Pages/landingpage/LandingPage';
import HomePage from './Pages/HomePage/HomePage'
import Level from "./Pages/Level/Level";
import ExamPage from "./Pages/student/ExamPage";
import Track from "./Pages/Track/Track";
import Jops from "./Pages/Jops/Jops";
import JopDetails from "./Pages/JopDetails/JopDetails";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/level" element={<Level/>}/>
        <Route path="/exam" element={<ExamPage/>}/>
        <Route path="/track" element={<Track/>}/>
        <Route path="/jops" element={<Jops/>}/>
        <Route path="/jopDetails" element={<JopDetails/>}/>
        <Route path="/jopTask" element={<JopTask/>}/>


     </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
