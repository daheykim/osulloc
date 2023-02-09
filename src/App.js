import './App.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import teaData from './pages/teaData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins, faComments, faLocationDot, faMugHot, faQuestionCircle, faUser } from "@fortawesome/free-solid-svg-icons"
import { faTiktok, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'



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
          <Navbar.Brand className="main_logo" onClick={() => navigator('/osulloc/')}>
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
        <Route path='/osulloc/' element={
          <>
            <Carousel className='main_visual' variant="dark">
              <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/images/00_site/main_banner01.jpg"}
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
                  src={process.env.PUBLIC_URL + "/images/00_site/main_banner02.png"}
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
                  src={process.env.PUBLIC_URL + "/images/00_site/main_banner03.png"}
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
                  src={process.env.PUBLIC_URL + "/images/00_site/main_banner04.png"}
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
                  src={process.env.PUBLIC_URL + "/images/00_site/main_banner05.png"}
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
              <h4 className='best_title'>오늘은 어떤 차를 마셔볼까요?</h4>
              <Row className='best_boxes'>
                {
                  datas.map((data, i) => {
                    
                    return (
                      <>
                        {data.best === true ? 
                        <Link to ={`/detail/${i}`} className ="best_product_link">
                          <img src={data.imageOff} alt="" style={{ width: 200 }} />
                          <h6>{data.title}</h6>
                          <p>{data.price}원</p>
                        </Link>
                          : null
                          }
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

      <footer className='footer'>
        <div className='footer_top'>
          <ul className='sns_link'>
            <li><FontAwesomeIcon icon ={faUser} /></li>
            <li><FontAwesomeIcon icon ={faTiktok} /></li>
            <li><FontAwesomeIcon icon ={faYoutube} /></li>
            <li><FontAwesomeIcon icon ={faInstagram} /></li>
          </ul>
        </div>
        <div className='footer_mid'>
          <div className='mid_left'>
            <ul>
              <li>고객상담센터 · 주문/배송문의</li>
              <li className='contact'>080-805-5555</li>
              <li>평일 09:30 - 17:00 (점심 11:30 - 13:00)</li>
            </ul>
            <ul>
              <li>특판 대량구매 문의</li>
              <li className='contact'>help@osulloc.com<br />카카오톡 ID: osullocmall</li>
              <li>평일 09:30 - 17:00 (점심 11:30 - 13:00)</li>
            </ul>
          </div> {/* mid_left */}

          <ul className='mid_right'>
            <li>
              <FontAwesomeIcon icon ={faLocationDot} />
              <p>매장안내</p>
            </li>
            <li>
              <FontAwesomeIcon icon ={faMugHot} />
              <p>멤버십혜택</p>
            </li>
            <li>
              <FontAwesomeIcon icon ={faQuestionCircle} />
              <p>FAQ</p>
            </li>
            <li>
              <FontAwesomeIcon icon ={faComments} />
              <p>1:1문의</p>
            </li>
            <li>
              <FontAwesomeIcon icon ={faCoins} />
              <p>뷰티포인트<br />추후적립</p>
            </li>
          </ul>
        </div>
        <div className='footer_bot'>
          <div className='bot_left'>
            <img className="footer_logo" src={process.env.PUBLIC_URL + "/images/00_site/footer_logo.png"} alt="footer logo"/>
          </div>
          <div className='bot_center'>
            <ul className='info_list01'>
              <li>회사 소개</li>
              <li>서비스 이용약관</li>
              <li>개인정보 처리방침</li>
              <li>영상정보 처리방침</li>
              <li>뷰티포인트</li>
              <li>임직원할인</li>
              <li>사이트맵</li>
              <li>전자공고</li>
            </ul>
            <ul className='info_list02'>
              <li>㈜ 오설록</li>
              <li>대표이사:서혁제 주소:서울특별시 용산구 한강대로 100, 14층(한강로2가) 사업자등록번호: 390-87-01499</li>
              <li>통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오설록</li>
              <li>(주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는 통신판매중개자 이며 통신판매의 당사자가 아닙니다.<br />
              따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.</li>
            </ul>
          </div>
          <div className='bot_right'>
            <img src={process.env.PUBLIC_URL + "/images/00_site/escrow.jpg"} alt="escrow logo"/>
          </div>
        </div>
      </footer>

    </div>
  )
};



export default App;
