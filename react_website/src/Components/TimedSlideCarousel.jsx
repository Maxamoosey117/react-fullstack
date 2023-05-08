import Carousel from 'react-bootstrap/Carousel';

function TimedSlideCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3500}>
                    <img
                        className="d-block w-100"
                        src="/images/bt%20and%20cooper.jpg"
                        alt="BT and Cooper"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                    <img
                        className="d-block w-100"
                        src="/images/legion%20and%20scorch.jpg"
                        alt="A group of Titans"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                    <img
                        className="d-block w-100"
                        src="/images/first%20person%20bt.webp"
                        alt="BT in the campaign"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default TimedSlideCarousel;