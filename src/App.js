import './App.css';
import Posts from './pages/posts/Posts';
import Services from './pages/service/Index';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
          <div className='content'>
            <Routes>
              <Route path="/Posts" element={<Posts/>}></Route>
              <Route path="/Services" element={<Services/>}></Route>
            </Routes>
          </div>
         <Footer/>
      </Router>
    </div>
  );
}

export default App;
