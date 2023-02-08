import { useState } from 'react'
import { Link } from 'react-router-dom';
import teaData from './teaData'
import './style.css';

export default function HerbalTea() {

  let [image, setImage] = useState(false)
  const [index, setIndex] = useState('')

  return (
    <>
      <div className='visual_img'>
      <img src={process.env.PUBLIC_URL+'/images/06_herbalTea/banner_hub.jpg'} alt="" />
    </div>
    <div className='product_box'>
    {
      teaData.map((item, i) => {
        return(
          <>
          {item.group === 'herbaltea' ?
            <Link to={
              `/detail/${i}`
            } className='product'>
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
            </Link>
            : null
        }
          </>
        )
      })
    }
    </div>
    </>
  )
}