import { useState } from 'react'
import teaData from './teaData'
import './style.css';

export default function Masterpiece() {

  let [image, setImage] = useState(false)
  const [index, setIndex] = useState('')

  return (
    <div className='product_box'>
    {
      teaData.map((item, i) => {
        return(
          <div className='product'>
          {item.group === 'masterpiece' ?
            <> 
          <div className='img_div' onMouseOver={() => {
            setImage(true)
            setIndex(i)
          }} onMouseOut={() => {
            setImage(false)
          }}  >{
            image === true && index === i ? <img src={item.imageOn} alt="" /> : <img src={item.imageOff} alt="" />
          }</div>


            <h3>{item.title}</h3>
            <p>{item.price}원</p>
            </>
            : null
        }
          </div>
        )
      })
    }
    </div>
  )
}