import logo from './logo.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings}>
      <div className="block">
        <h3>Слайд 1</h3>
      </div>
      <div className="block">
        <h3>Слайд 2</h3>
      </div>
      <div className="block">
        <h3>Слайд 3</h3>
      </div>
      <div className="block">
        <h3>Слайд 4</h3>
      </div>
      <div className="block">
        <h3>Слайд 5</h3>
      </div>
      <div className="block">
        <h3>Слайд 6</h3>
      </div>
    </Slider>
  );
}

export default App;
