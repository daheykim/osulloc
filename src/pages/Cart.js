
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {addCount, subCount, deleteItem} from './store'
import './style.css'

export default function Cart() {
  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()
  let totalPrice = 0

  return (
    <>
      <Table striped bordered hover className='cart_wrap'>
        <thead>
          <h3 className='cart_title'>장바구니</h3>
          <tr>
            <th>상품명</th>
            <th>금액</th>
            <th>수량</th>
            <th>증감</th>
            <th>총 금액</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item ,i) => {
            totalPrice += state.cart[i].price * state.cart[i].count
            return (
              <tr key={i}>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].price}원</td>
                <td>{state.cart[i].count}개</td>
                <td>
                  <button onClick={() => {dispatch(addCount(state.cart[i].id))}}>+</button>
                  <button onClick={() => {dispatch(subCount(state.cart[i].id))}}>-</button>
                  <button onClick={() => {dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
                </td>
                <td>{state.cart[i].price * state.cart[i].count}원</td>
              </tr>
            )
          })
          }
        </tbody>
    </Table>
    <div className='totla_price'>
          <span>총 합계 : </span>
          <span>{totalPrice}원</span>
        </div>
    </>
  )
}