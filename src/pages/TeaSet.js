import { useState } from 'react'
import teaData from './teaData'
import './style.css';

export default function TeaSet() {

  let [image, setImage] = useState(false)
  const [index, setIndex] = useState('')

  return (
    <>
      <div className='visual_img'>
      <img src={process.env.PUBLIC_URL+'/images/01_teaSet/banner_set.jpg'} alt="" />
    </div>
    <div className='product_box'>
    {
      teaData.map((item, i) => {
        return(
          <div className='product'>
          {item.group === 'teaset' ?
            <> 
          <div className='img_div' onMouseOver={() => {
            setImage(true)
            setIndex(i)
          }} onMouseOut={() => {
            setImage(false)
          }}  >{
            image === true && index === i ? <img src={item.imageOn} alt="" /> : <img src={item.imageOff} alt="" />
          }</div>
            <p className='title'>{item.title}</p>
            <p className='price'>{item.price}원</p>
            </>
            : null
        }
          </div>
        )
      })
    }
    </div>
    </>
  )
}