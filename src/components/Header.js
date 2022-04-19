import logo from "../assets/img/logo-0.webp";
import logo1 from "../assets/img/logo-2.webp";
import logo2 from "../assets/img/logo-3.webp";
import logo3 from "../assets/img/logo-4.webp";
import logo4 from "../assets/img/logo-5.webp";
import logo5 from "../assets/img/logo-6.webp";
import logo6 from "../assets/img/logo-7.webp";
import logo7 from "../assets/img/logo-8.webp";
import logo8 from "../assets/img/logo-9.webp";
import logo9 from "../assets/img/logo-10.webp";
import logo10 from "../assets/img/logo-11.webp";
import logo11 from "../assets/img/logo-1.webp";
import { useState } from "react";

const Header = ({color}) => {
const [logoHeader, setLogoHeader] = useState("logo");

    return (
      <div className="test-header">
        <div className="test-header-content">
          {color === "#00A877" ? (
            <img src={logo1} alt="logo" />
          ) : color === "#01A59C" ? (
            <img src={logo2} alt="logo" />
          ) : color === "#0094AF" ? (
            <img src={logo3} alt="logo" />
          ) : color === "#006EBF" ? (
            <img src={logo4} alt="logo" />
          ) : color === "#7D01F8" ? (
            <img src={logo5} alt="logo" />
          ) : color === "#9F00C5" ? (
            <img src={logo6} alt="logo" />
          ) : color === "#D00181" ? (
            <img src={logo7} alt="logo" />
          ) : color === "#F3003D" ? (
            <img src={logo7} alt="logo" />
          ) : color === "#F28800" ? (
            <img src={logo9} alt="logo" />
          ) : color === "#EFCC00" ? (
            <img src={logo10} alt="logo" />
          ) : color === "#84CE04" ? (
            <img src={logo11} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}

          <span id="dumb">Dumb</span>
          <span id="convert">Conversions</span>
        </div>
      </div>
    );
};

export default Header;