import styled from "styled-components";

const HeaderStyle = styled.div`
    {
      text-align: center;
      color: white;
    }
    h3 {
        font-size: 2.5vw;
    }    
    .btn-projectView {
        padding: 1em;
        background-color: lightgray;
        border-radius: .7em;
        color: black;
        margin-top: 2em; 
        text-decoration: none;        
        margin-bottom: 10%;
    }
    .btn-projectView:hover {
        background-color: lightgreen;
        transform: scale(1.3);
      }
    .skillSection {
        margin: 2%;
    }
    .skillsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 2%;
        margin-bottom 10%;
        background-color: white;
        padding: 2.5em;
    }
    .sectionElement {        
        background-color: #024b30;
        padding: 3em;
        color: white;
        align-content: center;
        font-weight: bolder;
        border-bottom: 1.3em solid lightgray;
        border-radius: 50%;
    }
    span {
        text-shadow: 10px 10px 1px #ffff4d;
    }
`;

export default HeaderStyle;