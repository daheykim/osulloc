import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';

import TeaSet from './pages/TeaSet';
import Masterpiece from './pages/Masterpiece';
import GreenTea from './pages/GreenTea';
import BlackTea from './pages/BlackTea';
import BlendedTea from './pages/BlendedTea';
import HerbalTea from './pages/HerbalTea';
import MilkTea from './pages/MilkTea';
import Cart from './pages/Cart';

function App() {
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
            <Nav.Link onClick={() => {navigator('/milktea')}}>밀크티/아이스티</Nav.Link>
            <Nav.Link onClick={() => {navigator('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/'></Route>
        <Route path='/teaset' element={<TeaSet />}></Route>
        <Route path='/masterpiece' element={<Masterpiece />}></Route>
        <Route path='/greetea' element={<GreenTea />}></Route>
        <Route path='/blacktea' element={<BlackTea />}></Route>
        <Route path='/blendedtea' element={<BlendedTea />}></Route>
        <Route path='/herbaltea' element={<HerbalTea />}></Route>
        <Route path='/milktea' element={<MilkTea />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

      </Routes>
    </div>
  );
}

export default App;
