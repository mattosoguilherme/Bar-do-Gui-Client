import styled from "styled-components";

const HeaderP = styled.nav`
  background-color: #260707;
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
    color:#A6122D !important;
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

export default HeaderP;
