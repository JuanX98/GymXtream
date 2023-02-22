import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo_2.png";
import Bars from "../../assets/bars.png";
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{backgroundColor:'var(--appColor)', padding:'0.5rem',borderRadius:'5px'}}

          onClick = {()=> setMenuOpened(true)}
        >
          <img src={Bars} alt="" 
          style={{width: '2rem', height: '1.5rem'}}/>
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick = {()=> setMenuOpened(false)}
              activeClass = "active"
              to='hero'
              spy = {true}
              smooth = {true}
              >INICIO</Link>
          </li>
          <li>
            <Link
              onClick = {()=> setMenuOpened(false)}
              to='reasons'
              spy = {true}
              smooth = {true}
            >NOSOTROS</Link>
          </li>
          <li>
            <Link
              onClick = {()=> setMenuOpened(false)}
              to='testimonials'
              spy = {true}
              smooth = {true}
            >RESULTADOS</Link>
          </li>
          <li>
            <Link
              onClick = {()=> setMenuOpened(false)}
              to='programs'
              spy = {true}
              smooth = {true}
            >ENTRENAMIENTO</Link>
          </li>
          <li>
            <Link
              onClick = {()=> setMenuOpened(false)}
              to='plans'
              spy = {true}
              smooth = {true}
            >COSTOS</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
