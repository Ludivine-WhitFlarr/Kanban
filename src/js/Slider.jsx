import React, { Component } from "react";
import Slider from "react-slick";
import sliderImage1 from '../image/sliderImage1.jpeg';
import sliderImage2 from '../image/sliderImage2.png';


class SliderKanban extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={sliderImage1}/>
          </div>
          <div>
            <img src={sliderImage2}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderKanban;
