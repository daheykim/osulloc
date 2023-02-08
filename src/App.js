import './App.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import teaData from './pages/teaData';

import TeaSet from './pages/TeaSet';
import Masterpiece from './pages/Masterpiece';
import GreenTea from './pages/GreenTea';
import BlackTea from './pages/BlackTea';
import BlendedTea from './pages/BlendedTea';
import HerbalTea from './pages/HerbalTea';
import IcedTea from './pages/IcedTea';
import Cart from './pages/Cart';
import Details from './pages/Details';


function App() {

  const navigator = useNavigate();
  const [datas] = useState(teaData);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="main_logo" onClick={() => navigator('/')}>
            <img src={process.env.PUBLIC_URL + '/images/00_site/logo_black.png'} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigator('/teaset') }}>티 세트</Nav.Link>
            <Nav.Link onClick={() => { navigator('/masterpiece') }}>명차</Nav.Link>
            <Nav.Link onClick={() => { navigator('/greetea') }}>녹차/말차</Nav.Link>
            <Nav.Link onClick={() => { navigator('/blacktea') }}>발효차/홍차</Nav.Link>
            <Nav.Link onClick={() => { navigator('/blendedtea') }}>블렌디드티</Nav.Link>
            <Nav.Link onClick={() => { navigator('/herbaltea') }}>허브티</Nav.Link>
            <Nav.Link onClick={() => { navigator('/icedtea') }}>밀크티/아이스티</Nav.Link>
            <Nav.Link onClick={() => { navigator('/cart') }} className="cart_icon">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <Carousel className='main_visual' variant="dark">
              <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100"
                  src="/images/00_site/main_banner01.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>녹차 초콜릿으로 달콤쌉쌀<br />
                    특별한 발렌타인데이</h3>
                  <p>오설록의 프리미엄 초콜릿으로<br />
                    특별한 발렌타인데이를 보내세요.</p>
                  <p>02.06 - 02.19</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100"
                  src="/images/00_site/main_banner02.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>20입 피라미드<br />
                    20% 할인</h3>
                  <p>오설록 베스트셀러를 다양하게 즐길 수 있는<br />
                    20일 제품을 최대 20% 할인으로 만나보세요.</p>
                  <p>01.31 - 02.12</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/00_site/main_banner03.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>새로운 다다일상과<br />
                    조금 더 빨리 만나요.</h3>
                  <p>23년 3월 1일,<br />
                    새로워진 다다일상이 여러분을 찾아옵니다.</p>
                  <p>02.01 - 02.28</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/00_site/main_banner04.png"
                  alt="forth slide"
                />
                <Carousel.Caption>
                  <h3>다다일상과 함께 달라진<br />
                    당신의 일상을 보여주세요</h3>
                  <p>다다일상으로 달라진 나의 티라이프 소개하고<br />
                    오설록 티하우스 북촌점 초대권도 받아가세요.</p>
                  <p>02.01 - 02.15</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/00_site/main_banner05.png"
                  alt="fifth slide"
                />
                <Carousel.Caption>
                  <h3>토스로 생애 첫 결제 시<br />
                    3천원 즉시 캐시백</h3>
                  <p>지금 토스로 1만원 이상 결제하면<br />
                    3천원을 돌려드려요.</p>
                  <p>10.24 - 02.28</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <Container className='best_wrap'>
              <h4>오늘은 어떤 차를 마셔볼까요?</h4>
              <Row className='best_box'>
                {
                  datas.map((data, i) => {
                    return (
                      <>
                        {data.group === 'teaset' ? 
                        <Link to={`/detail/${i}`} className="best_product_link">
                        <div classN>
                          <img src={data.imageOff} alt="" style={{ width: 200 }} />
                          <h6>{data.title}</h6>
                          <p>{data.price}원</p>
                        </div>
                        </Link>
                          : null}
                      </>
                    )
                  })
                }
              </Row>
            </Container>
          </>
        }>
        </Route>

        <Route path='teaset' element={<TeaSet teaData={teaData} />}></Route>
        <Route path='masterpiece' element={<Masterpiece />}></Route>
        <Route path='greetea' element={<GreenTea />}></Route>
        <Route path='blacktea' element={<BlackTea />}></Route>
        <Route path='blendedtea' element={<BlendedTea />}></Route>
        <Route path='herbaltea' element={<HerbalTea />}></Route>
        <Route path='icedtea' element={<IcedTea />}></Route>
        <Route path='cart' element={<Cart />}></Route>
        <Route path='detail/:id' element={<Details datas={datas} />}></Route>
      </Routes>

    </div>
  )
};


export default App;
