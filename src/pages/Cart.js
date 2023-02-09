
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {addCount, subCount, deleteItem} from './store'
import './style.css'

export default function Cart() {
  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()

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
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item ,i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].price * state.cart[i].count}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={() => {dispatch(addCount(state.cart[i].id))}}>+</button>
                  <button onClick={() => {dispatch(subCount(state.cart[i].id))}}>-</button>
                  <button onClick={() => {dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
                </td>
              </tr>
            )
          })
          }
        </tbody>
    </Table>
    </>
  )
}