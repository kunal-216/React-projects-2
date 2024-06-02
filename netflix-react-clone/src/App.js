import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tvshows' element={<Home/>}/>
        <Route path='/movies' element={<Home/>}/>
        <Route path='/new&popular' element={<Home/>}/>
        <Route path='/mylist' element={<Home/>}/>
        <Route path='/browsebylanguage' element={<Home/>}/>
        <Route path='/children' element={<Home/>}/>
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;