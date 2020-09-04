import React from 'react';
import copyright from "../../images/copyright.png";
import Style from "./footer.styles";

function Footer() {
    return (
        <Style>
        <footer>
            <div className="allRights">
                <img src={copyright} alt=""/>
                <span>All right reserved</span>
            </div>                
        </footer>
        </Style>
    )
}

export default Footer;
