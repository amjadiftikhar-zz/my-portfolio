import styled from "styled-components";

const NavigationStyles = styled.div`
  .navbar {
    background-color: #024b30;
    padding: 2em;
  }
  .navbar-brand, .navbar-nav .nav-link, .toggle {
    color: white;
  
    &:hover {
      color: red;
    }
  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: white;
    padding: 0.4em;
    }
  }
`;

export default NavigationStyles;