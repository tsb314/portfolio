import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavBar } from './components/NavBar'
import { MainPage } from './components/MainPage'
import { Footer } from './components/Footer'
import { Routes, Route } from "react-router-dom";
import { Project1 } from './pages/Project1'
import { Project2 } from './pages/Project2'
import { Project3 } from './pages/Project3'
import { Project4 } from './pages/Project4'
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <div className="App">
    <ScrollToTop />
    <NavBar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
    </Routes>
    <Footer />
    </div>     
  );
}


export default App;
