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
        height: 2em;
        width: 2em;
        background-color: white;
        border-radius: 50%;
    }
    .allRights{
        display: flex;
        flex-direction: column;
        color: gray;
        font-family: sans-serif;
        margin-left: 50%;        
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
