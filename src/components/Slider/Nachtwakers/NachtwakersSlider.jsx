import React from 'react'
import Slider from "react-slick";
import "./../slick.css";
import "./../slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginRight: "25px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginLeft: "25px", zIndex: 1 }}
            onClick={onClick}
        />
    );
}


export default class slider extends React.Component {
    state = {
        display: true

    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <div>
                <h5>Nachtwakers</h5>
                <Slider {...settings}>
                    <div>
                        <a href="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_1200/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/1.jpg">
                            <img className="carousel-img" alt="smoker1" src="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_600/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/1.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_1200/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/2.jpg">
                            <img className="carousel-img" alt="smoker1" src="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_600/v1622037289/Portfolio%20-%20BQTH/Photos/Nachtwakers/2.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_1200/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/3.jpg">
                            <img className="carousel-img" alt="smoker1" src="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_600/v1622037289/Portfolio%20-%20BQTH/Photos/Nachtwakers/3.jpg" />
                        </a>
                    </div>
                    <div>
                    <a href="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_1200/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/4.jpg">
                        <img className="carousel-img" alt="smoker1" src="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_600/v1622037289/Portfolio%20-%20BQTH/Photos/Nachtwakers/4.jpg" />
                    </a>
                    </div>
                    <div>
                    <a href="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_1200/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/5.jpg">
                        <img className="carousel-img" alt="smoker1" src="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_600/v1622037289/Portfolio%20-%20BQTH/Photos/Nachtwakers/5.jpg" />
                    </a>
                    </div>
                    <div>
                    <a href="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_1200/v1622037203/Portfolio%20-%20BQTH/Photos/Nachtwakers/6.jpg">
                        <img className="carousel-img" alt="smoker1" src="https://res.cloudinary.com/dcgy2ao4n/image/upload/c_scale,q_80,w_600/v1622037289/Portfolio%20-%20BQTH/Photos/Nachtwakers/6.jpg" />
                    </a>
                    </div>
                </Slider>
            </div>

        )
    }
}

