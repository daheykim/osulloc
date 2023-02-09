import { Link, useParams } from "react-router-dom"
import './style.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins, faLeaf, faCartShopping, faGift, faL } from "@fortawesome/free-solid-svg-icons"

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react"
import { useDispatch} from "react-redux"
import {addItem} from "./store"


export default function Details(props) {
  const {datas} = props
  const {id} = useParams()
  const dispatch = useDispatch()

  const Button = styled.button`
    display : inline-block;
    width: 50%;
    height: 50px;
    color: #fff;
    border: none;
    box-sizing: border-box;
    }
`
  const [key, setKey] = useState('detailInfo');
  const [modal, setModal] = useState(false);

  return (
    <div className="detail_wrap">
      { modal === true
      ? <>
        <div className="modal_box">
            <h6>장바구니에 담겼습니다</h6>
            <Link to={'/cart'}><button className="btn modal_btn01">장바구니 바로가기</button></Link>
            <button onClick={()=> {
              setModal(false)
            }} className="btn modal_btn02">쇼핑 계속하기</button>
          </div>
        </> 
        : null
    }
      <div className="detail_box">
        <div className="detail_left">
          <div className="detail_img">
          <img src={datas[id].imageOff} alt="" />
          </div>
          <div className="point_box">
            <span><FontAwesomeIcon icon ={faCoins} /> 뷰티포인트 {datas[id].price * 0.01}p 적립</span>
            <span><FontAwesomeIcon icon = {faLeaf} /> 찻잎 {datas[id].price * 0.01}p 적립</span>
            <span><FontAwesomeIcon icon= {faCartShopping} /> {datas[id].typeBag}</span>
            <span><FontAwesomeIcon icon={faGift} /> {datas[id].typePack}</span>
          </div>
        </div> {/* detail_left */}
        
        <div className="detail_right">
          <h4>{datas[id].title}</h4>
          <p className="dsec">{datas[id].desc}</p>
          <p className="price"><span>{datas[id].price}</span>원</p> 

          <Button className="cart" onClick={() => {
            dispatch(addItem({id:datas[id].id, title:datas[id].title, price:datas[id].price, count:1}))

            setModal(true)
          }}>장바구니</Button>
          <Button className="buy">바로구매</Button>
        </div> {/* detail_right */}
      </div>
      
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      >
      <Tab eventKey="detailInfo" title="제품상세">
        <div className="detail_info">
          <img src={datas[id].info} alt="" />
        </div>

      </Tab>
      {/* <Tab eventKey="review" title="고객리뷰">
      </Tab> */}
      <Tab eventKey="notice" title="상품고시정보">
        <div className="detail_info notice_box">
          <ul>
            <div className="notice_title">배송기간</div>
            <ul>
              <li>입금 확인 후 2~4일 가량 소요되며, 지역에 따라 약간의 차이가 있을 수 있습니다.(매일 낮 14시 주문 건까지 출고됩니다.)</li>
              <li>(연휴, 공휴일, 일부 도서지역 및 사서함 주소는 2~3일 추가 소요 예상됩니다.)</li>
            </ul>
          </ul>
          <ul>
            <div className="notice_title">배송비</div>
            <ul>
              <li>총 결제 금액 3만원 이상 시 무료배송이며, 3만원 미만 주문 시에는 택배비 2,500원을 부담하셔야 합니다. (배송비와 쇼핑백 환경부담금을 제외한 결제 금액 기준 / 도서산간 지역 추가비용 없음)</li>
              <li>고객님 개인적인 사정에 의한 교환/반품 시에는 왕복 배송비를 부담해 주셔야 교환/반품이 가능합니다.</li>
            </ul>
          </ul>
          <ul>
            <div className="notice_title">교환/반품</div>
            <ul>
              <li>상품을 받으신 날로부터 7일 이내 교환/반품이 가능합니다. 단, 일부 상품의 경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환 및 반품이 불가능합니다.</li>
              <li>받으신 상품 내용이 표시, 광고 내용과 다르거나 다르게 이행된 경우에는 그 상품을 받은 날로부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내 청약 철회가 가능합니다.</li>
              <li>반품 시, 상품대금 환불은 상품 회수 및 청약철회가 확정된 날로부터 3영업일 이내 진행되며, 기한을 초과한 경우 지연 기간에 대하여 「전자상거래 등에서의 소비자보호에 관한 법률 시행령」 에서 정하는 이율을 곱하여 산정한 지연이자를 지급합니다.</li>
              <li>고객님의 책임있는 사유로 상품 등이 멸실 또는 훼손된 경우 교환/반품이 불가능합니다.</li>
              <li>고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 교환/반품이 불가능합니다.</li>
              <li>시간의 경과에 의하여 재판매가 곤란한 정도로 상품 등의 가치가 현저히 감소한 경우 교환/반품이 불가능합니다.</li>
              <li>고객님의 주문에 따라 개별적으로 생산되는 재화등 또는 이와 유사한 재화등에 대하여 청약철회등을 인정하는 경우 통신판매업자에게 회복할 수 없는 중대한 피해가 예상되는 경우로서 사전에 해당 거래에 대하여 별도로 그 사실을 고지하고 고객님의 서면(전자문서 포함)에 의한 동의를 받은 경우 교환/반품이 불가능합니다.</li>
            </ul>
          </ul>
        </div>
      </Tab>
    </Tabs>
    </div>
  )
}



