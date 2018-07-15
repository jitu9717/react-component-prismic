import React, { Component } from 'react';
import Slider from "react-slick";
import './style.css';
import '../index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            },
            slideData: [
                {
                    text : '1'
                },
                {
                    text : '2'
                },
                {
                    text : '3'
                },
                {
                    text : '4'
                },
                {
                    text : '5'
                },
                {
                    text : '6'
                }
            ]
        }
    }

    render() {
        const { settings, slideData } = this.state;
        return (
            <div className="menu-bar">
                <header className="menu-bar-header">
                    <h1 className="menu-bar-title">Menu Bar</h1>
                </header>
                <div className="backgroundBlue">
                    <Slider {...settings}>
                        {
                            slideData.map((slide, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{slide.text}</h3>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Carousel;