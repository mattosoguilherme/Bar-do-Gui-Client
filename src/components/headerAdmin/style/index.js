import styled from "styled-components";

const HeaderS = styled.nav`
  background-color: #262626;
  font-size:1.5rem;

  span{
    margin-bottom: 0.6rem;
  }  
  #nameBar{
    font-size:1.8rem;
  }

  .nav-link{
    color: white !important;
  }
  .nav-link:hover{
    color:black !important;
  }

  .dropdown-menu{
    background-color:#BF382C
  }

  button {
    align-self: end;
    background-color: transparent;
    border:none;
    color: white !important;
  }
`;

export default HeaderS;
