
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart() {
  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()

  return (
    <>
      <Table striped bordered hover>
      <thead>
        <h3>장바구니</h3>
        <tr>
          <th>체크</th>
          <th>상품명</th>
          <th>수량</th>
          <th>증감</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        <td>
          <button>+</button>
          <button>-</button>
          <button>삭제</button>
        </td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}