import "./Header.css";
import logo from "../assets/images/logo/kairos-logo-un-color-beige.png";

import slider1 from "../assets/images/categories/slider7.jpg";
import slider2 from "../assets/images/categories/slider8.jpg";
import slider3 from "../assets/images/categories/slider9.jpg";
import slider4 from "../assets/images/categories/slider10.jpg";

export default function Header() {
  return (
    <div className='header'>
        <img src={logo} alt='logo' className='logo' />

        <div className="slider-frame"> 
          <ul>
            <li><img src={slider1} alt=""></img></li>
            <li><img src={slider2} alt=""></img></li>
            <li><img src={slider3} alt=""></img></li>
            <li><img src={slider4} alt=""></img></li>
          </ul>
    </div>
    </div>
  );
}
