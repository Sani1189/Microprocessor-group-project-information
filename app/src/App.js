
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Member from './pages/Member';
import Error from './pages/Error';
import About from './pages/About';
import Instuctor from './pages/Instuctor';
import PreSurvey from './pages/PreSurvey';
import PostSurvey from './pages/PostSurvey';

import Navbar from './Component/Navbar';
import GanttChart from './pages/GanttChart';



function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member" element={<Member />} />
      <Route path="/about" element={<About />} />
      <Route path="/instuctor" element={<Instuctor />} />
      <Route path="/preSurvey" element={<PreSurvey />} />
      <Route path="/postSurvey" element={<PostSurvey />} />
      <Route path="/ganttChart" element={<GanttChart />} />
      <Route path="*" element={<Error />} />

      </Routes>





    </BrowserRouter>

   
  );
}

export default App;
