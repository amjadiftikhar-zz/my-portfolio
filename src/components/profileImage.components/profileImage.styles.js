import styled from "styled-components";

const ImageStyle = styled.div`
    .profilePic {
      border: 1px solid green;
      width: 50%;
      height: auto;     
    }
    .leftSection {
        display: flex;
        flex-direction: column; 
        width: 25%;
        align-items: center;        
    }
    h5{
        margin-top: 0.7em;
        color: white;
        font-size: 2vw;
    }
    .classContact {
        display: flex;
        flex-wrap: wrap;
        padding: 5%;
        border-bottom: 2px solid white;
    }
    img {
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }
    .classContact a {
       margin-left:20%;
       margin-right:20%;
    }
`;

export default ImageStyle;