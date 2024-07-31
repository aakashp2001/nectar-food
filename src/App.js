import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
import Faq from './pages/Faq';
import NotFound from './components/NotFound';
import Community from './pages/Community'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>

      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/community' element={<Community/>}/>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
