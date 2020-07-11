import React from 'react'
import styled from "styled-components";

const Style = styled.div`
    h1 {
        font-size: 3vw;
        text-align: center;
        margin-top: 5%;
        color: white;
        font-weight: bold;
        // text-shadow: 15px 15px 1px green;
    }
`;

function Header() {
    return (
        <Style>
            <h1>
                WELCOME TO MY PORTFOLIO
            </h1>
        </Style>
    )
}

export default Header
