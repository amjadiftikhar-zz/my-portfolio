import React from 'react'
import styled from "styled-components";

const Style = styled.div`
    h2 {
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
            <h2>
                WELCOME TO MY PORTFOLIO
            </h2>
        </Style>
    )
}

export default Header
