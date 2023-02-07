import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container,Navbar, Nav } from 'react-bootstrap';


import TeaSet from './pages/TeaSet';
import Masterpiece from './pages/Masterpiece';
import GreenTea from './pages/GreenTea';
import BlackTea from './pages/BlackTea';
import BlendedTea from './pages/BlendedTea';
import HerbalTea from './pages/HerbalTea';
import IcedTea from './pages/IcedTea';
import About from './pages/About';
import Cart from './pages/Cart';
import teaData from './pages/teaData';



function App() {

  const navigator = useNavigate()

  
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigator('/')}>오설록</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigator('/teaset')}}>티 세트</Nav.Link>
            <Nav.Link onClick={() => {navigator('/masterpiece')}}>명차</Nav.Link>
            <Nav.Link onClick={() => {navigator('/greetea')}}>녹차/말차</Nav.Link>
            <Nav.Link onClick={() => {navigator('/blacktea')}}>발효차/홍차</Nav.Link>
            <Nav.Link onClick={() => {navigator('/blendedtea')}}>블렌디드티</Nav.Link>
            <Nav.Link onClick={() => {navigator('/herbaltea')}}>허브티</Nav.Link>
            <Nav.Link onClick={() => {navigator('/icedtea')}}>밀크티/아이스티</Nav.Link>
            <Nav.Link onClick={() => {navigator('/about')}}>About</Nav.Link>
            <Nav.Link onClick={() => {navigator('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/'></Route>
        <Route path='teaset' element={<TeaSet teaData = {teaData}/>}></Route>
        <Route path='masterpiece' element={<Masterpiece />}></Route>
        <Route path='greetea' element={<GreenTea />}></Route>
        <Route path='blacktea' element={<BlackTea />}></Route>
        <Route path='blendedtea' element={<BlendedTea />}></Route>
        <Route path='herbaltea' element={<HerbalTea />}></Route>
        <Route path='icedtea' element={<IcedTea />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='cart' element={<Cart />}></Route>

      </Routes>
    </div>
  );
}

export default App;
