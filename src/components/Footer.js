import React from 'react';
import styled from "styled-components";
import copyright from "../images/copyright.png";

const Style = styled.div`
    footer {
        min-height: 8em;
        display: flex;
        background-color: #024b30;
        width: 100%;
        align-items: center;
    }
    img {
        height: 3em;
        width: 3em;
        background-color: white;
        border-radius: 50%;
    }
    .allRights{
        display: flex;
        flex-direction: column;
        color: white;
        font-family: sans-serif;        
    }
`;

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
