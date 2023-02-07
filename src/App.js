
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar3';
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Event from './pages/events/Event';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     
      <Router>
        <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='teams' element={<Team/>}/>
          <Route path='events' element={<h1>{<Event/>}</h1>}/>
          <Route path='*' element={<h1>Error</h1>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
