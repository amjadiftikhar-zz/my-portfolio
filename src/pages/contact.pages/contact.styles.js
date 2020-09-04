import styled from "styled-components";

const Style = styled.div`
  {
    margin-bottom: 100%;
  }
  h3 {
    text-align: center;
    margin-top: 10%;
    color: #024b30;    
    border-bottom: 3px solid darkgreen;
    background-color: white;
    padding: 0.5em;
  }
  .classContacts{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;  
    margin: 5%; 
  }
  .classContents {
    display: flex;
    justify-content: space-between;
    margin-right: 5%;
    margin-bottom: 10%;
  }
  .classIcon {
    width: 3.5em;
    height: 3.5em;
    margin: 2%;
    border-radius: 50%;
    margin-top: 10%;
    margin-bottom: 13%;
    color: white;
    font-weight: bold;
    bottom-margin: 50%;
  }
  .classTooltip {
    display: none;
  }
  .toolTip:hover .classTooltip { 
    display: block;
    padding: 0.3em;
    position: absolute;
    font-size: 15px;
  }
 span {
   padding: .2em;
   line-height: 1.5em;
 }
`;

export default Style;