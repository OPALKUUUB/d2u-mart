import React, {useState} from 'react'
import { SliderData } from './SliderData'
import "./ImageSlider.css";

const ImageSlider = (slides) => {
    const [current, setCurrent] = useState(0)
    const length = 1;

    const nextSlide = () => {
        setCurrent(current === length ? 0 : current + 1);
    };

    console.log(current);

    const prevSlide = () => {
        setCurrent(current === 0 ? length : current - 1);
    };

  return (
    <section className='slider'>
        <img src="/image/left.png" className="left-arrow" onClick={prevSlide}/>
        <img src="/image/right.png" className="right-arrow" onClick={nextSlide}/>
        {SliderData.map((slides, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (<img src={slides.image} alt="" className='Image'/>)}
                </div>
            )           
        })}
    </section>
  )
}

export default ImageSlider